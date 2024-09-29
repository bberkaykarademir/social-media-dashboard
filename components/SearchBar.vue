<template>
  <form
    @submit.prevent="postsStore.searchPosts()"
    class="max-w-[50rem] mt-10 w-full mx-auto inputWrapper inputWrapper-focus flex items-center border border-white focus-within:border-transparent px-3 gap-4 rounded-full transition-transform duration-500"
    :class="
      Object.keys(postsStore.postsResponse).length > 0
        ? 'translate-y-0'
        : 'focus-within:translate-y-0 translate-y-40'
    "
  >
    <input
      type="text"
      placeholder="Search hashtag or keyword"
      class="w-full h-12 lg:h-16 text-lg lg:text-2xl py-2 ml-2"
      v-model="postsStore.filters.query"
    />
    <button
      type="submit"
      class="bg-transparent"
      :disabled="postsStore.filters.query.trim().length < 3"
    >
      <Icon class="w-5 lg:w-7 h-5 lg:h-7 mt-2" name="material-symbols:search" />
    </button>
  </form>
</template>

<script setup lang="ts">
const postsStore = usePostsStore();
</script>
