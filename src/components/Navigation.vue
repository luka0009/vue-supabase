<template>
  <header class="bg-at-light-green text-white">
    <nav
      class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row"
    >
      <div class="flex items-center gap-x-4">
        <img class="w-14" src="../assets/dumbbell-light.png" alt="" />
        <h1 class="text-lg">Active Tracker</h1>
      </div>
      <ul class="flex flex-1 justify-end gap-x-3">
        <router-link class="cursor-pointer" to="/">Home</router-link>
        <router-link v-if="user" class="cursor-pointer" to="create"
          >Create</router-link
        >
        <router-link v-if="!user" class="cursor-pointer" to="login"
          >Login</router-link
        >
        <li v-if="user" @click="logout" class="cursor-pointer">Logout</li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>
