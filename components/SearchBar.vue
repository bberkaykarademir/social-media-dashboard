<template>
  <form
    @submit.prevent="searchQuery"
    class="max-w-[50rem] mt-10 w-full mx-auto inputWrapper inputWrapper-focus flex items-center border border-white focus-within:border-transparent px-3 gap-4 rounded-full transition-transform duration-500"
    :class="
      postsStore.posts.length > 0
        ? 'translate-y-0'
        : 'focus-within:translate-y-0 translate-y-40'
    "
  >
    <input
      type="text"
      placeholder="Search hashtag or keyword"
      class="w-full h-16 text-2xl py-2 ml-2"
      v-model="query"
    />
    <button type="submit" class="bg-transparent">
      <Icon class="w-7 h-7 mt-2" name="material-symbols:search" />
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
const postsStore = usePostsStore();
const query = ref("");

const searchQuery = () => {
  postsStore.searchPosts();
};
</script>
