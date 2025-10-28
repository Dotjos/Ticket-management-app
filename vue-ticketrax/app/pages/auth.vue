<template>
    <div class="min-h-screen flex items-center justify-center bg-linear-to-b from-blue-50 to-blue-100 relative overflow-hidden">
      <!-- Decorative Circles -->
      <div class="absolute -top-10 -left-10 w-40 h-40 bg-blue-800 rounded-full opacity-10"></div>
      <div class="absolute bottom-0 right-0 w-56 h-56 bg-blue-300 rounded-full opacity-20"></div>
  
      <!-- Wave Background -->
      <svg
        class="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1E40AF"
          fill-opacity="0.3"
          d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,240C960,267,1056,245,1152,202.7C1248,160,1344,96,1392,64L1440,32V320H0Z"
        />
      </svg>
  
      <!-- Auth Card -->
      <div class="relative z-10 w-[90%] max-w-md bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8">
        <h1 class="text-2xl font-bold text-center text-blue-800 mb-6">
          Ticketrax
        </h1>
        <!-- 👇 Nuxt handles nested routes here -->
        <NuxtPage :foobar="'123'"/>
      </div>
    </div>
  </template>
  