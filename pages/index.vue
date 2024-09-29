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
    <DashboardLargeScreen />
    <DashboardSmallScreen />
  </main>
</template>

<script setup lang="ts">
const postsStore = usePostsStore();
</script>
