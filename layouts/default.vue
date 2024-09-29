<template>
  <div
    class="flex flex-col min-h-screen 2xl:h-screen pb-2 2xl:overflow-hidden bg-[#030614] text-white"
  >
    <NuxtLoadingIndicator color="#252DDA" />
    <Header />
    <slot />
  </div>
</template>
