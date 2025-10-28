<script setup lang="ts">
import type { ToasterProps } from '@nuxt/ui'
const toaster: ToasterProps = {
  position: 'top-right',
}

</script>

<template>
  <div class="mx-auto max-w-[1440px]">
    <UApp :toaster="toaster">
      <NuxtPage />
    </UApp>
  </div>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui";

html{
  scroll-behavior: smooth;
}

@theme {
  --color-deep-blue: #1E40AF;
}
</style>
