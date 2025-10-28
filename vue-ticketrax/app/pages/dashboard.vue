<template>
    <div class="max-w-[1440px] mx-auto p-6 mt-20">
      <!-- Header -->
      <header class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold text-deep-blue">Dashboard</h1>
        <button
          @click="logout"
          class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </header>
  
      <!-- Stats Grid -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <!-- Total Tickets -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <h3 class="text-gray-700 font-semibold">Total Tickets</h3>
          <p class="text-2xl font-bold mt-2">{{ stats.total }}</p>
        </div>
  
        <!-- Open Tickets -->
        <div class="bg-green-100 shadow-md rounded-lg p-6">
          <h3 class="text-gray-700 font-semibold">Open</h3>
          <p class="text-2xl font-bold mt-2 text-green-600">{{ stats.open }}</p>
        </div>
  
        <!-- In Progress Tickets -->
        <div class="bg-amber-100 shadow-md rounded-lg p-6">
          <h3 class="text-gray-700 font-semibold">In Progress</h3>
          <p class="text-2xl font-bold mt-2 text-amber-600">
            {{ stats.inProgress }}
          </p>
        </div>
  
        <!-- Closed Tickets -->
        <div class="bg-gray-100 shadow-md rounded-lg p-6">
          <h3 class="text-gray-700 font-semibold">Closed</h3>
          <p class="text-2xl font-bold mt-2 text-gray-600">{{ stats.closed }}</p>
        </div>
      </section>
  
      <!-- Manage Tickets Button -->
      <div class="mt-10">
        <button
          @click="navigateToTickets"
          class="bg-deep-blue text-white px-5 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Manage Tickets
        </button>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
import { useRouter } from "vue-router";
 definePageMeta({middleware:"auth"})

const router = useRouter();

const tickets = getTickets();
const stats = getTicketStats(tickets);

const logout = () => {
  const sessionCookie = useCookie('ticketapp_session');

  sessionCookie.value = null; 


  // localStorage.removeItem("ticketapp_session");
  router.push("/");
};

const navigateToTickets = () => {
  router.push("/tickets");
};
</script>

  