<template>
  <div class="flex justify-between items-center w-1/2 mx-auto">
    <div class="flex items-center justify-center gap-5">
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

      <div class="flex gap-3">
        <input
          v-model="postsStore.filters.startDate"
          type="date"
          class="bg-gray-900 text-white rounded-lg py-2 px-3 text-center flex"
          placeholder="Search"
        />

        <input
          v-model="postsStore.filters.endDate"
          type="date"
          class="bg-gray-900 text-white rounded-lg py-2 px-3 text-center flex"
          placeholder="Search"
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
