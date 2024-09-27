<template>
  <header class="bg-[#030615]">
    <div class="wrapperHeader flex py-4 justify-between">
      <NuxtImg
        src="https://www.dedecta.com/assets/logoblue.svg"
        alt="Dedecta Logo"
        class="flex-shrink-0 w-32"
      />
      <NuxtLink
        to="https://www.dedecta.com/"
        target="_blank"
        class="bg-primary flex items-center gap-3 h-fit my-auto py-2 px-4 rounded-lg font-semibold text-sm"
      >
        <span>Explore Other Services</span>
        <Icon name="material-symbols:arrow-right-alt" class="w-5 h-5" />
      </NuxtLink>
    </div>
  </header>
</template>
