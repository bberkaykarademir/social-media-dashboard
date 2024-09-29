<template>
  <main
    class="wrapperHeader 2xl:wrapperContent flex flex-col gap-5 2xl:gap-20 2xl:overflow-hidden 2xl:h-screen"
  >
    <div class="flex flex-col gap-5">
      <SearchBar />
      <FilterBar
        v-if="
          Object.keys(postsStore.postsResponse).length > 0 &&
          !postsStore.postsLoading
        "
      />
    </div>
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
  </main>
</template>

<script setup lang="ts">
const postsStore = usePostsStore();
</script>
