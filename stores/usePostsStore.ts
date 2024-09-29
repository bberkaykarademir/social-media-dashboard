import { defineStore } from "pinia";
import type { IPost } from "~/types/IPost";
import type { IFilters, Platform } from "~/types/IFilters";
import { SortBy } from "~/types/IFilters";
import type { SortObj } from "~/types/Objects";

interface SearchPostsResponse {
  results: IPost[];
  continuation_token: string;
}

interface SearchPostsParams {
  query: string;
  section: string;
  min_retweets: number;
  min_likes: number;
  limit: number;
  min_replies: number;
  start_date?: string;
  end_date?: string;
}

export const usePostsStore = defineStore({
  id: "posts",
  state: () => ({
    filters: {
      platform: "",
      query: "",
      startDate: "",
      endDate: "",
      sortBy: SortBy.NEWEST,
    } as IFilters,
    postsResponse: {} as SearchPostsResponse,
    postsLoading: false,
  }),
  actions: {
    resetFilters() {
      this.filters.platform = "";
      this.filters.startDate = "";
      this.filters.endDate = "";
      this.filters.sortBy = SortBy.NEWEST;
    },

    async searchPosts(filterPosts?: boolean) {
      try {
        if (this.filters.query.trim().length < 3) {
          return;
        }

        this.postsLoading = true;
        const queryParams = this.buildQueryParams(filterPosts);

        const response = await this.fetchPosts(queryParams);
        const transformedResults = this.transformResults(response.results);

        let filteredResults = this.filterPostsByPlatform(transformedResults);
        filteredResults = this.sortPosts(filteredResults);

        this.postsResponse = { ...response, results: filteredResults };

        return this.postsResponse;
      } catch (error) {
        console.error("Error fetching posts:", error);
        this.postsResponse = { results: [], continuation_token: "" };
        throw error;
      } finally {
        this.postsLoading = false;
      }
    },

    buildQueryParams(filterPosts?: boolean): SearchPostsParams {
      const queryParams: SearchPostsParams = {
        query: this.filters.query,
        section: "top",
        min_retweets: 1,
        min_likes: 1,
        limit: 20,
        min_replies: 1,
      };

      if (!filterPosts) this.resetFilters();

      if (this.filters.startDate) {
        queryParams.start_date = parseFilterDate(this.filters.startDate);
      }
      if (this.filters.endDate) {
        queryParams.end_date = parseFilterDate(this.filters.endDate);
      }

      return queryParams;
    },

    async fetchPosts(
      queryParams: SearchPostsParams
    ): Promise<SearchPostsResponse> {
      const config = useRuntimeConfig();
      const response = await $fetch<SearchPostsResponse>(
        `https://twitter154.p.rapidapi.com/search/search`,
        {
          headers: {
            "x-rapidapi-key": config.public.rapidApiKey as string,
            "x-rapidapi-host": config.public.rapidApiHost as string,
            Accept: "application/json, text/plain, */*",
          },
          retry: 0,
          query: queryParams,
        }
      );

      return response;
    },

    transformResults(results: IPost[]): IPost[] {
      const platforms = [
        { name: "Twitter", icon: "hugeicons:new-twitter" },
        { name: "Linkedin", icon: "mdi:linkedin" },
      ];

      return results.map((post) => {
        const randomPlatform =
          platforms[Math.floor(Math.random() * platforms.length)];

        return {
          ...post,
          platform: randomPlatform,
        };
      });
    },

    filterPostsByPlatform(posts: IPost[]): IPost[] {
      if (this.filters.platform) {
        return posts.filter(
          (post) => post.platform.name === this.filters.platform
        );
      }
      return posts;
    },

    sortPosts(posts: IPost[]): IPost[] {
      if (this.filters.sortBy === SortBy.NEWEST) {
        return this.sortByDate(posts, "DESC");
      } else if (this.filters.sortBy === SortBy.OLDEST) {
        return this.sortByDate(posts, "ASC");
      } else if (this.filters.sortBy === SortBy.INTERACTIONPOINT) {
        return this.sortByInteraction(posts);
      }
      return posts;
    },

    sortByDate(posts: IPost[], direction: "ASC" | "DESC"): IPost[] {
      return posts.sort((a, b) => {
        const dateA = new Date(a.creation_date).getTime();
        const dateB = new Date(b.creation_date).getTime();
        return direction === "DESC" ? dateB - dateA : dateA - dateB;
      });
    },

    sortByInteraction(posts: IPost[]): IPost[] {
      return posts.sort((a, b) => {
        const interactionA =
          (a.favorite_count || 0) +
          (a.retweet_count || 0) +
          (a.reply_count || 0);
        const interactionB =
          (b.favorite_count || 0) +
          (b.retweet_count || 0) +
          (b.reply_count || 0);
        return interactionB - interactionA;
      });
    },

    async filterPosts() {
      await this.searchPosts(true);
    },
  },
});
