<template>
  <div class="min-h-full font-Poppins box-border">
    <Navigation />
    <RouterView />
  </div>
</template>

<script setup>
import { supabase } from "./lib/supabaseClient";
import Navigation from "./components/Navigation.vue";

console.log(supabase);
</script>
