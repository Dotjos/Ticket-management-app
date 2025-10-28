<template>
  <footer id="footer" class="bg-blue-900 backdrop-blur-md border-t border-white/20 mt-20 py-8 text-center text-white">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Top Section: Navigation Links -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
        <div class="font-semibold text-xl">Ticketrax</div>

        <NavList />

        <!-- CTA -->
        <NuxtLink
          to="/auth/signup"
          class="px-5 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition text-sm"
        >
          Get Started
        </NuxtLink>
      </div>

      <!-- Divider -->
      <div class="border-t border-white/20 my-6"></div>

      <!-- Bottom Section: Credits -->
      <div class="text-sm text-white/70 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>
          © {{ currentYear }}
          <span class="font-medium text-white"> Ticketrax </span>.
          All rights reserved.
        </p>
        <p>
          Built with 💙 by
          <a
            href="https://github.com/Dotjos"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-blue-300"
          >
            Oladotun Joseph
          </a>
          — HNG Internship Stage 2
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import NavList from '~/components/NavList.vue'

// Reactive variable for current year
const currentYear = new Date().getFullYear()
</script>
