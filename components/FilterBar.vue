<template>
  <div
    class="flex flex-col w-full md:w-fit md:flex-row gap-4 md:gap-10 2xl:gap-0 justify-between items-center 2xl:w-1/2 mx-auto text-sm md:text-base"
  >
    <div class="flex flex-col w-full md:w-fit md:flex-row md:items-center justify-center gap-3 md:gap-5">
      <select
        v-model="postsStore.filters.sortBy"
        class="bg-gray-900 text-white rounded-lg py-2 px-3 flex"
      >
        <option
          v-for="sort in sortObjArr"
          :key="sort.text"
          :value="sort.sortBy"
        >
          {{ sort.text }}
        </option>
      </select>

      <div class="flex flex-col md:flex-row w-full md:w-fit gap-3">
        <input
          v-model="postsStore.filters.startDate"
          type="date"
          class="bg-gray-900 text-white min-w-[96%] sm:min-w-fit rounded-lg py-2 px-1 md:px-3 text-center flex w-full"
        />

        <input
          v-model="postsStore.filters.endDate"
          type="date"
          class="bg-gray-900 text-white min-w-[96%] sm:min-w-fit rounded-lg py-2 px-1 md:px-3 text-center flex w-full"
        />
        
      </div>

      <select
        class="bg-gray-900 text-white rounded-lg py-2 px-3 flex"
        v-model="postsStore.filters.platform"
      >
        <option
          v-for="platform in platformObjArr"
          :key="platform.text"
          :value="platform.value"
        >
          {{ platform.text }}
        </option>
      </select>
    </div>
    <button
      @click="postsStore.filterPosts()"
      class="bg-primary flex items-center gap-3 h-fit my-auto py-2 px-6 rounded-lg font-semibold text-sm"
      :disabled="postsStore.filters.query.trim().length < 3"
    >
      <span>Filter Posts</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { SortBy, Platform } from "~/types/IFilters";
import type { SortObj, PlatformObj } from "~/types/Objects";
const postsStore = usePostsStore();

const sortObjArr: SortObj[] = [
  { text: "Newest", sortBy: SortBy.NEWEST },
  { text: "Oldest", sortBy: SortBy.OLDEST },
  {
    text: "Populars",
    sortBy: SortBy.INTERACTIONPOINT,
  },
];

const platformObjArr: PlatformObj[] = [
  { text: "All Platforms", value: Platform.ALL },
  { text: "Twitter", value: Platform.TWITTER },
  { text: "Linkedin", value: Platform.LINKEDIN },
];
</script>
