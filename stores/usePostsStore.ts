import { defineStore } from "pinia";

export const usePostsStore = defineStore({
  id: "posts",
  state: () => ({
    posts: [] as string[],
  }),
  actions: {
    searchPosts() {
      console.log("searching for posts");
      this.posts = ["Post 1", "Post 2", "Post 3"];
    },
  },
});
