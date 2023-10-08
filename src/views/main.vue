<script setup>
import solarSystem from "@/components/solarSystem.vue"
import MainInfo from "../components/mainInfo.vue";
import Typewriter from '@btjspr/vue-typewriter';

</script>
<template>
    <div class="p-8 text-white">
        <Typewriter :speed="50" :delay="10" :loop="false" :textStyles="{ color: 'white', fontSize: '1.2em' }"
            :cursorStyles="{ width: '0px' }" class="pb-2">
            <h1>Welcome to Phopper, your portal to interplanetary exploration!</h1>

        </Typewriter>
    </div>
    <solarSystem />
    <MainInfo />
</template>

"
