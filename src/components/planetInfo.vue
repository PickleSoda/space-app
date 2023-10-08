<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Typewriter from '@btjspr/vue-typewriter';


  defineProps({
    planetInfo:{
        type:Object

    }
  })
  
  const isSmOrLarger = ref(false);
  
  const setScreenSize = () => {
    isSmOrLarger.value = window.innerWidth >= 640; // Adjust the breakpoint as needed
  };
  
  // onMounted(() => {
  //   setScreenSize();
  //   window.addEventListener('resize', setScreenSize);
  // });
  
  // onUnmounted(() => {
  //   window.removeEventListener('resize', setScreenSize);
  // });
  </script>

<template>
    <div
      class="relative -mt-10 sm:-mt-32 md:mt-0 md:absolute sm:top-20 left-0 w-80"
    >
      <div class="bg-opacity-20 p-4  bg-black z-20  text-white text-sm text- sm:text-base border border-white border-opacity-30">
        <h2 class="text-base sm:text-lg font-bold">Name: </h2>
        
        <Typewriter :speed="50" :delay="500" :loop="false" :textStyles="{color: 'white', fontSize: '1.25em'}" :cursorStyles="{width: '0px'}">
        
            <h1 >{{ planetInfo.Name }}</h1>
        </Typewriter>

        <p class="pt-1">Size: </p>
        <Typewriter :speed="50" :delay="1000" :loop="false" :textStyles="{color: 'white', fontSize: '1em'}" :cursorStyles="{width: '0px'}">
            {{ planetInfo.Size}}
        </Typewriter>

        <p class="pt-1">Weight:</p>
        <Typewriter :speed="50" :delay="1500" :loop="false" :textStyles="{color: 'white', fontSize: '1em'}" :cursorStyles="{width: '0px'}">
            <p> {{ planetInfo.Weight }}</p>
        </Typewriter>


        <p class="pt-1">Chemical Composition:  </p>
        <Typewriter :speed="20" :delay="2000" :loop="false" :textStyles="{color: 'white', fontSize: '1em'}" :cursorStyles="{width: '0px'}">
            <p> {{ planetInfo.ChemicalComposition }}</p>
        </Typewriter>
        

        <p class="pt-1">Number of Expeditions: </p>
        <Typewriter :speed="50" :delay="2500" :loop="false" :textStyles="{color: 'white', fontSize: '1em'}" :cursorStyles="{width: '0px'}">
            <p>{{ planetInfo.NumberofExpeditions }} Expeditions</p>
        </Typewriter>
        

        
        <p class="pt-1">Number of Moons: </p>
        <Typewriter :speed="50" :delay="3000" :loop="false" :textStyles="{color: 'white', fontSize: '1em'}" :cursorStyles="{width: '0px'}">
            <p>{{ planetInfo.NumberofMoons }} Moons</p>
        </Typewriter>
        
        

        <p class="pt-1">Distance From Sun: </p>
        <Typewriter :speed="50" :delay="3500" :loop="false" :textStyles="{color: 'white', fontSize: '1em'}" :cursorStyles="{width: '0px'}">
            <p>{{ planetInfo.DistanceFromSun }}</p>
        </Typewriter>
        

        <p class="pt-1">Distance From Earth: </p>

        <Typewriter :speed="50" :delay="4000" :loop="false" :textStyles="{color: 'white', fontSize: '1em'}" :cursorStyles="{width: '0px'}">
            <p>{{ planetInfo.DistanceFromEarth }}</p>
        </Typewriter>


        



      </div>
    </div>
    <div
      class="relative  md:absolute sm:top-24 sm:right-0 w-full md:w-1/3"
    >
      <div class="bg-opacity-20 p-4  bg-black z-20  text-white text-sm text- sm:text-base border border-white border-opacity-30">
        <h2 class="text-base sm:text-lg font-bold md:pr-4">Description: </h2>
        
        <Typewriter :speed="20" :delay="500" :loop="false" :textStyles="{color: 'white', fontSize: '0.75em'}" :cursorStyles="{width: '0px'}">
        
            <h1 >{{ planetInfo.Description }}</h1>
        </Typewriter>
        <h2 class="text-base sm:text-lg font-bold md:pr-4 pt-2">Fun Facts: </h2>


        <div v-for="FunFacts,index in planetInfo.FunFacts  " >

            <Typewriter :speed="20" :delay="1000+index*100" :loop="false" :textStyles="{color: 'white', fontSize: '0.75em'}" :cursorStyles="{width: '0px'}">
           - {{FunFacts}}
        </Typewriter>

        </div>
        <h2 class="text-base sm:text-lg font-bold md:pr-4 pt-2">Must Have:  </h2>


        <div v-for="MustHave in planetInfo.MustHave  " >

            <Typewriter :speed="20" :delay="1500+index*100" :loop="false" :textStyles="{color: 'white', fontSize: '0.75em'}" :cursorStyles="{width: '0px'}">
           - {{MustHave}}
        </Typewriter>

        </div>
        </div>
      </div>
  </template>
  
  


  