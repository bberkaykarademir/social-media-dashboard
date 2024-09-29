<template>
  <div
    class="flex flex-col flex-grow gap-6 overflow-y-auto max-w-[900px] mx-auto h-[600px] 2xl:h-full"
  >
    <div
      v-if="postsStore.postsLoading"
      v-for="index in 2"
      class="postSkeleton flex-shrink-0 h-44 w-[350px] sm:w-[650px] mx-auto"
    ></div>
    <div
      v-else
      v-for="(postData, index) in postsStore.postsResponse?.results"
      :key="postData.tweet_id"
      class="bg-gray-900 flex flex-col gap-4 rounded-lg px-4 pt-4 pb-2"
    >
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <div class="flex gap-3 items-center">
            <div class="bg-[#d9d9d9] rounded-full w-7 sm:w-8 h-7 sm:h-8">
              <NuxtImg
                :src="postData.user.profile_pic_url"
                alt="profile image"
                class="rounded-full w-full h-full"
              />
            </div>
            <span class="text-sm sm:text-base">{{
              postData.user.username
            }}</span>
          </div>
          <span class="text-xs text-gray-300">{{
            parseDateResponse(postData.creation_date)
          }}</span>
        </div>
        <p class="text-xs sm:text-sm">
          {{ postData.text }}
        </p>
      </div>
      <div class="flex justify-between items-center text-xs">
        <div class="flex items-center gap-4">
          <div class="flex gap-1 items-center">
            <Icon class="w-3 h-3" name="ph:thumbs-up" />
            <span>{{ postData.favorite_count }}</span>
          </div>
          <div class="flex gap-1 items-center">
            <Icon class="w-3 h-3" name="ant-design:retweet-outlined" />
            <span>{{ postData.retweet_count }}</span>
          </div>
          <div class="flex gap-1 items-center">
            <Icon class="w-3 h-3" name="material-symbols:comment" />
            <span>{{ postData.reply_count }}</span>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <span>{{ postData.platform.name }}</span>
          <Icon class="w-4 h-4" :name="postData.platform.icon" />
        </div>
      </div>
    </div>
    <p
      v-if="
        postsStore.postsResponse?.results?.length === 0 &&
        !postsStore.postsLoading
      "
      class="text-center text-white"
    >
      No posts found
    </p>
  </div>
</template>

<script setup lang="ts">
const postsStore = usePostsStore();
</script>
