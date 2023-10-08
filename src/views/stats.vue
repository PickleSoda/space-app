<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, watch, onMounted } from "vue";
import { useMainStore } from "@/stores/main";
import Typewriter from "@btjspr/vue-typewriter";

const mainStore = useMainStore();
const route = useRoute();
const router = useRouter();
const query = ref(route.query);

const stats = ref({});

const planets = ref({});

function countStats() {
  const planetIds = query.value;
  const queryArray = Object.keys(planetIds).map((key) => planetIds[key]);
  const result = retrieveDistAndName(planets.value, queryArray);
  const trips = calculateTrips(result);
  const totalDistance = calculateTotalDistance(trips);
  console.log(trips, totalDistance);
  return { trips: trips, totalDistance: totalDistance };
}

function retrieveDistAndName(data, indexes) {
  const result = [];
  for (const indexStr of indexes) {
    const index = parseInt(indexStr); // Convert the index string to an integer
    console.log(index);
    if (!isNaN(index) && index >= 0 && index < data.length) {
      const item = data[index];
      console.log({ Dist: item["Dist"], name: item["Name"] });
      if (item.hasOwnProperty("Dist") && item.hasOwnProperty("Name")) {
        result.push({ Dist: item["Dist"], name: item["Name"] });
      }
    }
  }
  return result;
}

function calculateTrips(data) {
  const trips = [];

  for (let i = 0; i < data.length; i++) {
    const from = data[i].name;
    const to = data[(i + 1) % data.length].name;
    const dist = Math.abs(data[(i + 1) % data.length].Dist - data[i].Dist);

    trips.push({ from, to, dist });
  }

  return trips;
}

function calculateTotalDistance(trips) {
  let totalDistance = 0;
  for (const trip of trips) {
    totalDistance += trip.dist;
  }
  return totalDistance;
}

onMounted(() => {
  planets.value = mainStore.planets;
  stats.value = countStats();
});
watch(
  () => route.query,
  (newQuery) => {
    console.log(newQuery);
    query.value = newQuery;
  }
);
</script>
<template>
  <div
    class="text-white absolute top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 w-full max-w-xl px-6 md:px-10"
  >
    <Typewriter
      :speed="50"
      :delay="10"
      :loop="false"
      :textStyles="{ color: 'white', fontSize: '1.2em' }"
      :cursorStyles="{ width: '0px' }"
      class="pb-4"
    >
      <h1>Phopper Journey Receipt!</h1>
    </Typewriter>
    <div
      class="border border-white border-opacity-30 p-8 bg-black bg-opacity-20"
    >
      <p class="text-lg font-bold text-center">Destination Planets:</p>
      <ul
        v-for="trips in stats.trips"
        class="w-full flex items-center justify-around text-sm md:text-base"
      >
        <p>{{ trips.from }} →</p>
        <p>{{ Math.ceil(trips.dist/1.2) }} days</p>
        <p>→ {{ trips.to }}</p>
      </ul>
      <div class="flex justify-items-start mt-5">
        <div>
          <p class="text-lg font-bold text-center">Trip Duration With Current Technology:</p>
          <p class="text-center">
            ~{{ stats.totalDistance }} Milion km. <br />

            ~{{ Math.ceil(stats.totalDistance / 0.05) }} Hrs
            <br />

            ~({{ Math.ceil(stats.totalDistance / 1.2) }} days)
            <br />
            ~({{ (stats.totalDistance / 1.2 / 360).toFixed(1) }} Years)
            <br />
            Total Cost: 
            <br/>
            [$$$,$$$,$$$,$$$]
          </p>
        </div>
        <div>
          <p class="text-lg font-bold text-center">Trip Duration In Future (Advanced Electric Propulsion):</p>
          <p class="text-center">
            ~{{ stats.totalDistance }} Milion km. <br />

            ~{{ Math.ceil(stats.totalDistance / 0.15) }} Hrs
            <br />

            ~({{ Math.ceil(stats.totalDistance / 3.6) }} days)
            <br />
            ~({{ (stats.totalDistance / 3.6 / 360).toFixed(1) }} Years)
            <br />
            Total Cost: [$$$,$$$,$$$,$$$]
          </p>
        </div>
      </div>
    </div>
    <div
      class="text-white p-2 border border-white w-fit mx-auto mt-2 hover:bg-white hover:text-black cursor-pointer"
    >
      <router-link to="/">Return Home</router-link>
    </div>
    <div
      class="text-white p-2 border border-white w-fit mx-auto mt-2 hover:bg-white hover:text-black cursor-pointer"
    >
      <router-link to="/quiz">Go To Quiz!</router-link>
    </div>
  </div>
</template>

"
