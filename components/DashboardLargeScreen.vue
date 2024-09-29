<template>
  <div
    class="hidden 2xl:flex justify-between 2xl:overflow-hidden flex-col-reverse 2xl:flex-row gap-7 2xl:gap-4"
  >
    <BarChart
      v-if="
        postsStore.postsResponse?.results?.length > 0 &&
        !postsStore.postsLoading
      "
    />
    <PostList />
    <DoughnutChart
      v-if="
        postsStore.postsResponse?.results?.length > 0 &&
        !postsStore.postsLoading
      "
    />
  </div>
</template>

<script setup lang="ts">
const postsStore = usePostsStore();
</script>
