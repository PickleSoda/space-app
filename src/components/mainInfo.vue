<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router'
import Typewriter from '@btjspr/vue-typewriter';
import { useAutoAnimate } from '@formkit/auto-animate/vue'

const router = useRouter();


const planets = ref([
    { id: 0, name: "Mercury" },
    { id: 1, name: "Venus" },
    { id: 3, name: "Mars" },
    { id: 4, name: "Jupiter" },
    { id: 5, name: "Saturn" },
    { id: 6, name: "Uranus" },
    { id: 7, name: "Neptune" },
]);
const disabledPlanets = ref([]);

function moveUp(idToMove) {
    const index = planets.value.findIndex((planet) => planet.id === idToMove);
    if (index > 0) {
        const planetToMove = planets.value[index];
        planets.value.splice(index, 1);
        planets.value.splice(index - 1, 0, planetToMove);
    }
}
function moveDown(idToMove) {
    const index = planets.value.findIndex((planet) => planet.id === idToMove);
    if (index < planets.value.length - 1) {
        const planetToMove = planets.value[index];
        planets.value.splice(index, 1);
        planets.value.splice(index + 1, 0, planetToMove);
    }
}
function disable(idToMove) {
  const index = planets.value.findIndex((planet) => planet.id === idToMove);
  if (index !== -1) {
    const planetToDisable = planets.value.splice(index, 1)[0]; // Remove the planet from the 'planets' array
    disabledPlanets.value.push(planetToDisable); // Add the disabled planet to 'disabledPlanets' array
  }
}
function enable(idToMove) {
  const index = disabledPlanets.value.findIndex((planet) => planet.id === idToMove);
  if (index !== -1) {
    const planetToEnable = disabledPlanets.value.splice(index, 1)[0]; // Remove the planet from the 'planets' array
    planets.value.push(planetToEnable); // Add the disabled planet to 'disabledPlanets' array
  }
}

// Function to shuffle the array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}
const startTrip = () => {
      const id = 2;
      const sortedIdsString = '2' + planets.value.map(planet => planet.id).join('');
      const query = sortedIdsString || {};
      console.log(query)

      router.push({ name: 'planet', params: { id }, query });
    };

const [parent] = useAutoAnimate()


</script>

<template>
    <div class="relative  sm:-mt-20 md:mt-0 md:absolute sm:top-20 left-0 w-full md:w-72 sm:mb-20">
        <div class="bg-opacity-60 p-4  bg-black z-20  text-white text-sm text- sm:text-base border-opacity-40">
            <Typewriter :speed="20" :delay="3000" :loop="false" :textStyles="{ color: 'white', fontSize: '1em' }"
                :cursorStyles="{ width: '0px' }">
                With Phopper, you have the power to customize your own space adventure.
            </Typewriter>
            <br/>

            <Typewriter :speed="20" :delay="8000" :loop="false" :textStyles="{ color: 'white', fontSize: '1em' }"
                :cursorStyles="{ width: '0px' }">
  Just pick the planets you want to visit, and our website will design the perfect tour for you.
            </Typewriter>
            <br/>
            
            <Typewriter :speed="20" :delay="12000" :loop="false" :textStyles="{ color: 'white', fontSize: '1em' }"
                :cursorStyles="{ width: '0px' }">
 From the crimson deserts of Mars to the enigmatic moons of Jupiter,
 Phopper turns your dreams of space travel into reality.
            </Typewriter>
        </div>
    </div>
    <div class="relative  md:absolute md:top-1/3 sm:right-0 w-full md:w-56 z-40">
        <div class="bg-opacity-70 p-4  bg-black z-20  text-white text-sm sm:text-base">

            <Typewriter :speed="50" :delay="500" :loop="false" :textStyles="{ color: 'white', fontSize: '1.2em' }"
                :cursorStyles="{ width: '0px' }" class="pb-2">
                <h1>Choose Your Trip:</h1>

            </Typewriter>
            <button @click="shuffleArray(planets)"
                class="text-lg mx-auto w-full p-1 border border-white border-opacity-60 hover:bg-white hover:text-black">↑ shuffle ↓</button>

            <ul ref="parent" class="border-x p-2 border-white border-opacity-60">
                <li class="w-full flex flex-nowrap pb-1 text-lg">
                    1. Earth
                </li>
                <li v-for="planet, index in planets" :key="planet.id" class="w-full flex flex-nowrap">
                    <p>
                        {{ index + 2 }}. {{ planet.name }}
                    </p>
                    <div class="ml-auto">
                        <button @click="moveUp(planet.id)" class="!text-2xl sm:!text-xl pr-2"
                            :class="index == '0' && 'opacity-30 cursor-default'">↑</button>
                        <button @click="moveDown(planet.id)" class="!text-2xl sm:!text-xl pr-4"
                            :class="index == '6' && 'opacity-30 cursor-default'">↓</button>
                            <button @click="disable(planet.id)" class="text-xl">X</button>
                    </div>
                </li>
                <li v-for="planet, index in disabledPlanets" :key="planet.id" class="w-full flex flex-nowrap ">
                    <p class="opacity-60">
                        {{ index + 2 }}. {{ planet.name }}
                    </p>
                    <div class="ml-auto">
                            <button @click="enable(planet.id)" class="text-xl opacity-100 text-white">Y</button>
                    </div>
                </li>
            </ul>
            <button @click="startTrip()"
                class="text-lg mx-auto w-full p-1 border border-white border-opacity-60 hover:bg-white hover:text-black">Let's Go!</button>


        </div>
    </div>
</template>
  
  


  