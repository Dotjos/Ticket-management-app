<template>
  <section class="min-h-screen relative bg-linear-to-b from-blue-800 to-blue-900 text-white overflow-hidden">
    <!-- Decorative Circles -->
    <div class="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-indigo-500/40 shadow-2xl"></div>

    <Navbar />

    <!-- Hero Content -->
    <div
      id="home"
      class="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
    >
      <h1 class="text-5xl font-bold mb-4">Ticketrax</h1>
      <p class="text-lg max-w-xl mb-6">
        Manage, track, and resolve tickets efficiently — across all teams.
      </p>
      <NuxtLink
          to="/auth/signup"
          class="px-5 py-2 rounded-full bg-white text-blue-700 font-semibold hover:bg-blue-500 transition"
        >
          Get started
        </NuxtLink>
    </div>

    <!-- SVG Wave at Bottom -->
    <svg
      class="absolute bottom-0 left-0 w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,160L80,186.7C160,213,320,267,480,272C640,277,800,235,960,208C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
  </section>

  <FeaturesSection/>
  <Footer/>
</template>


  
  <script setup>
  import Navbar from "~/components/Navbar.vue";
  import Footer from "~/components/Footer.vue";
  import FeaturesSection from "~/components/FeaturesSection.vue";
  </script>
