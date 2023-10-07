<script setup>
import solarSystem from "@/components/solar-system.vue"
</script>
<template>
        <div class="p-8 text-white">
            <h1>
                hi this is the solar system lets go to :

                <router-link to="/earth">earth</router-link>
            </h1>
        </div>
        <solarSystem/>

</template>