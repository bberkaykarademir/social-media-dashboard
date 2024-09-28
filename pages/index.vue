<template>
  <main class="flex flex-col gap-20 overflow-hidden h-screen">
    <SearchBar />
    <div
      class="justify-between wrapperContent overflow-hidden"
      :class="postsStore.posts.length > 0 ? 'flex gap-4' : 'hidden'"
    >
      <BarChart />

      <PostList />

      <DoughnutChart />
    </div>
  </main>
</template>

<script setup lang="ts">
const postsStore = usePostsStore();
</script>
