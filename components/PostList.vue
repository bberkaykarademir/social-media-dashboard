<template>
  <div class="flex flex-col flex-grow gap-6 overflow-y-auto">
    <div
      v-for="(postData, index) in 6"
      :key="index"
      class="bg-gray-900 flex flex-col gap-4 rounded-lg px-4 pt-4 pb-2"
    >
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <div class="flex gap-3 items-center">
            <div class="bg-[#d9d9d9] rounded-full w-8 h-8"></div>
            <span>Berkay Karademir</span>
          </div>
          <span class="text-xs text-gray-300">20.11.2024 14:30</span>
        </div>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero soluta voluptatum voluptate quasi. Quo laboriosam aperiam
          temporibus, itaque facere fugit!
        </p>
      </div>
      <div class="flex justify-between items-center text-xs">
        <div class="flex items-center gap-4">
          <div class="flex gap-1 items-center">
            <Icon class="w-3 h-3" name="ph:thumbs-up" />
            <span>11</span>
          </div>
          <div class="flex gap-1 items-center">
            <Icon class="w-3 h-3" name="ant-design:retweet-outlined" />
            <span>11</span>
          </div>
          <div class="flex gap-1 items-center">
            <Icon class="w-3 h-3" name="material-symbols:comment" />
            <span>11</span>
          </div>
        </div>
        <span>Twitter</span>
      </div>
    </div>
  </div>
</template>
