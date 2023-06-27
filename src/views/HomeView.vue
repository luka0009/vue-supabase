<template>
  <div>
    <button @click="fetchData">Fetch</button>
  </div>
</template>

<script setup>
  import { supabase } from "../lib/supabaseClient";
  const fetchData = async () => {
    let { data: workouts, error } = await supabase.from("workouts").select("*");
    console.log("workouts", workouts);
  };
</script>
