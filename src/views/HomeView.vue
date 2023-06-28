<template>
  <div v-if="!dataIsLoaded" class="flex items-center justify-center mt-[10%]">
    <div v-if="errorMsg">{{ errorMsg }}</div>
    <div v-else class="text-[30px]">Loading...</div>
  </div>
  <div v-if="dataIsLoaded" class="container mt-10 px-4">
    <!-- No Data -->
    <div v-if="data.length === 0" class="w-full flex flex-col items-center">
      <h1 class="text-2xl">Looks empty here...</h1>
      <router-link
        class="mt-6 py-2 px-6 rounded-sm text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"
        :to="{ name: 'Create' }"
        >Create Workout</router-link
      >
    </div>

    <!-- Data -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <router-link
        class="flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer"
        v-for="(workout, index) in data"
        :to="`/view-workout/${workout.id}`"
        :key="index"
      >
        <img
          v-if="workout.workoutType === 'cardio'"
          src="../assets/running-light-green.png"
          class="h-24 w-auto"
          alt=""
        />

        <img
          v-else
          src="../assets/dumbbell-light-green.png"
          class="h-24 w-auto"
          alt=""
        />

        <p
          class="mt-6 py-1 px-3 text-xs text-white bg-at-light-green shadow-md rounded-lg"
        >
          {{ workout.workoutType }}
        </p>

        <h1 class="mt-8 mb-2 text-center text-xl text-at-light-green">
          {{ workout.workoutName }}
        </h1>
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { supabase } from "../lib/supabaseClient";

  const data = ref([]);
  const dataIsLoaded = ref(false);
  const errorMsg = ref(null);

  const fetchData = async () => {
    try {
      const { data: workouts, error } = await supabase
        .from("workouts")
        .select("*");

      if (error) {
        console.log(error);
        dataIsLoaded.value = false;
        errorMsg.value = error.message;
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

  fetchData();
</script>
