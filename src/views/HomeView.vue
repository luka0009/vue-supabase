<template>
  <div>
    <button @click="fetchData">Fetch</button>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { supabase } from "../lib/supabaseClient";

  const data = ref([]);
  const dataIsLoaded = ref(false);

  const fetchData = async () => {
    try {
      const { data: workouts, error } = await supabase
        .from('workouts')
        .select("*");
        
      if (error) {
        console.log(error);
      } else {
        data.value = workouts;
        dataIsLoaded.value = true;
        // console.log("data", data);
        console.log("workouts", workouts);
      }
    } catch (error) {
      console.log(error);
    }
  };
</script>
