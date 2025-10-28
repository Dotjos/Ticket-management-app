<template>
  <nav class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px] px-4">
    <!-- Navbar Container -->
    <div
      class="bg-blue-900 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-between px-6 py-3 rounded-full md:px-10 md:py-2 lg:py-4 text-white"
    >
      <!-- Logo -->
      <div class="font-semibold text-xl">Ticketrax</div>

      <!-- Desktop Links -->
      <NavList />

      <!-- CTA Buttons (Desktop) -->
      <div class="hidden md:flex items-center gap-3">
        <NuxtLink
          to="/auth/login"
          class="px-5 py-2 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition"
        >
          Login
        </NuxtLink>
        <NuxtLink
          to="/auth/signup"
          class="px-5 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
        >
          Get started
        </NuxtLink>
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        @click="toggleMenu"
        class="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <component :is="isOpen ? XIcon : MenuIcon" size="22" />
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div
      v-if="isOpen"
      class="md:hidden mt-2 bg-deep-blue backdrop-blur-md border border-white/20 rounded-2xl shadow-lg py-4 px-6 text-white text-sm space-y-3"
    >
      <a href="#home" @click="closeMenu" class="block hover:text-blue-300 transition">
        Home
      </a>
      <a href="#features" @click="closeMenu" class="block hover:text-blue-300 transition">
        Features
      </a>
      <NuxtLink to="/tickets" class="hover:text-blue-300 transition">Tickets</NuxtLink>

      <!-- CTA Buttons (Mobile) -->
      <div class="pt-3 border-t flex flex-col text-white border-white/20 space-y-2">
        <NuxtLink
          to="/auth/login"
          class="px-5 py-2 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition"
        >
          Login
        </NuxtLink>
        <NuxtLink
          to="/auth/signup"
          class="px-5 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
        >
          Get started
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import NavList from "./NavList.vue";
import { Home, Menu as MenuIcon, X as XIcon } from "lucide-vue-next";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  updateBlur();
};

const closeMenu = () => {
  isOpen.value = false;
  updateBlur();
};

// 🧠 Function to blur main + footer when menu opens (mobile only)


const updateBlur = () => {
  const sections = [
    document.querySelector("#home"),
    document.querySelector("#features"),
    document.querySelector("footer"),
  ];


  if (isOpen.value && window.innerWidth < 768) {
    sections.forEach((el) => {
      if (el) el.style.filter = "blur(8px)";
      if (el) {
        // Attach click listener to close the menu when section is clicked
        el.addEventListener("click", closeMenu);
      }
    });
    document.body.style.overflow = "hidden"; // Prevent scroll
  } else {
    sections.forEach((el) => {
      if (el) el.style.filter = "";
      if (el) {
        // Remove event listener when menu closes
        el.removeEventListener("click", closeMenu);
      }
    });
    document.body.style.overflow = "";
  }
};





// 🧩 Automatically clear blur + reset menu when viewport ≥768px
const handleResize = () => {
  if (window.innerWidth >= 768 && isOpen.value) {
    isOpen.value = false;
    updateBlur();
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>


