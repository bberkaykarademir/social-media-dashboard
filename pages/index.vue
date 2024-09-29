<template>
  <main class="wrapperContent flex flex-col gap-20 overflow-hidden h-screen">
    <div class="flex flex-col gap-5">
      <SearchBar />
      <FilterBar
        v-if="
          Object.keys(postsStore.postsResponse).length > 0 &&
          !postsStore.postsLoading
        "
      />
    </div>
    <div class="justify-between overflow-hidden flex gap-4">
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
  </main>
</template>

<script setup lang="ts">
const postsStore = usePostsStore();
</script>
