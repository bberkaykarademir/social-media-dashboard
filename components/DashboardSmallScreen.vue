<template>
  <div
    class="flex 2xl:hidden justify-between 2xl:overflow-hidden flex-col 2xl:flex-row gap-7 2xl:gap-4"
  >
    <div class="flex flex-col md:flex-row gap-4 md:gap-10">
      <BarChart
        v-if="
          postsStore.postsResponse?.results?.length > 0 &&
          !postsStore.postsLoading
        "
      /><DoughnutChart
        v-if="
          postsStore.postsResponse?.results?.length > 0 &&
          !postsStore.postsLoading
        "
      />
    </div>
    <PostList />
  </div>
</template>

<script setup lang="ts">
const postsStore = usePostsStore();
</script>
