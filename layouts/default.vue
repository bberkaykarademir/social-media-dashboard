<template>
  <div
    class="flex flex-col h-screen pb-2 overflow-hidden bg-[#030614] text-white"
  >
    <NuxtLoadingIndicator color="#252DDA" />
    <Header />
    <slot />
  </div>
</template>
