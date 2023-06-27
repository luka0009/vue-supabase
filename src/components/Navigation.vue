<template>
  <header class="bg-at-light-green text-white">
    <nav
      class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row"
    >
      <div class="flex items-center gap-x-4">
        <img class="w-14" src="../assets/dumbbell-light.png" alt="" />
        <h1 class="text-lg">Fitness App</h1>
      </div>
      <ul class="flex flex-1 justify-end gap-x-3">
        <router-link class="cursor-pointer" :to="{ name: 'Home' }">Home</router-link>
        <router-link v-if="user" class="cursor-pointer" :to="{ name: 'Create' }">Create</router-link>
        <router-link v-if="!user" class="cursor-pointer" :to="{ name: 'Login' }">Login</router-link>
        <router-link v-if="!user" class="cursor-pointer" :to="{ name: 'Register' }">Register</router-link>
        <li v-if="user" @click="logout" class="cursor-pointer">Logout</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import store from '../store/store';
import { computed } from 'vue';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'vue-router';

const router = useRouter();

const user = computed(() => store.state.user);

const logout = async () => {
  await supabase.auth.signOut();
  router.push('/');
}
</script>
