<template>
  <div v-if="appReady" class="min-h-full font-Poppins box-border">
    <Navigation />
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navigation from "./components/Navigation.vue";
import { supabase } from "./lib/supabaseClient";
import store from "./store/store";

const appReady = ref(null);

const session = supabase.auth.getSession();
if (session && session.user) {
  appReady.value = true;
} else {
  appReady.value = true;
}

supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session,);
  store.methods.setUser(session);
});
</script>
