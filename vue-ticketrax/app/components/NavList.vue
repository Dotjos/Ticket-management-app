<template>
    <ul class="hidden md:flex items-center gap-8 text-sm">
      <li>
        <a href="#home" class="hover:text-blue-300 transition">
          Home
        </a>
      </li>
      <li>
        <a href="#features" class="hover:text-blue-300 transition">
          Features
        </a>
      </li>
      <li>
        <NuxtLink to="/tickets" class="hover:text-blue-300 transition">
          Tickets
        </NuxtLink>
      </li>
    </ul>
  </template>
  
  <script setup>
  // NuxtLink is globally available in Nuxt 3 — no need to import it manually
  </script>
  