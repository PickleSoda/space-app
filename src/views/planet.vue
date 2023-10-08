
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch, onMounted } from 'vue';
import { useMainStore } from "@/stores/main";
import PlanetInfo from '../components/planetInfo.vue';
import planetModel from '../components/planetModel.vue';

const mainStore = useMainStore()
const route = useRoute();
const router = useRouter();
const id = ref(route.params.id ? parseInt(route.params.id) : 2);
const query = ref(route.query);

const planet = ref({});
const nextPlanet = ref("");
const prevPlanet = ref("");

const info = ref(0)
const model = ref(0)


const cancelTrip = ref(false)

onMounted(() => {
    planet.value = mainStore.planets[id.value]
    forceRerender();
    findNextPlanet()
    findPrevPlanet()
})
// Watch for changes in the route
watch(
    () => route.params.id,
    (newId) => {
        console.log(newId)
        id.value = newId ? parseInt(newId) : 2;
        planet.value = mainStore.planets[id.value];
        forceRerender();
        findNextPlanet();
        findPrevPlanet()

    }
);
watch(
    () => route.query,
    (newQuery) => {
        console.log(newQuery)
        query.value = newQuery;
    }
);

function previous() {
    const planetIds = query.value;
    const queryArray = Object.keys(planetIds).map((key) => planetIds[key]);
    const currentIndex = queryArray.indexOf(id.value.toString());

    if (currentIndex > 0) {
        const previousId = queryArray[currentIndex - 1];
        router.push({ name: 'planet', params: { id: previousId }, query: queryArray });
    }
    else {
        cancelTrip.value = true;
    }
}
const findNextPlanet = () => {
    const planetIds = query.value;
    const queryArray = Object.keys(planetIds).map((key) => planetIds[key]);
    const currentIndex = queryArray.indexOf(id.value.toString());
    const nextId = queryArray[currentIndex + 1];
    nextPlanet.value = mainStore.planets[nextId]
}
const findPrevPlanet = () => {
    const planetIds = query.value;
    const queryArray = Object.keys(planetIds).map((key) => planetIds[key]);
    const currentIndex = queryArray.indexOf(id.value.toString());
    const prevId = queryArray[currentIndex - 1];
    prevPlanet.value = mainStore.planets[prevId]
}

function next() {
    const planetIds = query.value;
    const queryArray = Object.keys(planetIds).map((key) => planetIds[key]);
    const currentIndex = queryArray.indexOf(id.value.toString());
    if (currentIndex < queryArray.length-1) {
        const nextId = queryArray[currentIndex + 1];
        router.push({ name: 'planet', params: { id: nextId }, query: queryArray });
    }
    else{
        router.push({ name: 'reciept', query: queryArray });
    }
}

function notCancel() {
    cancelTrip.value = false;
}

const forceRerender = () => {
    info.value += 1;
    model.value += 1;

};
</script>
<template>
    <div v-if="(prevPlanet||nextPlanet)&&!cancelTrip" class="p-8 text-white flex flex-row items-center justify-between w-full">
        <h1 class="cursor-pointer" @click="previous()"> {{ prevPlanet ? "< Previous":"< Cancel Trip" }}</h1>
        <h1 class="cursor-pointer" @click="next()">  {{ nextPlanet && nextPlanet.Name != "" ?`Up Next ${nextPlanet.Name}`:" Finnish Trip " }} > </h1>
        
    </div>
    <div v-else class="p-8 text-white text-left w-full">
        <router-link to="/">{{"< Return To Main Page"}}</router-link>
    </div>
    <div v-if="!cancelTrip">

        <planetModel v-if="planet.url" :url="planet.url" :key="model"/>
        <PlanetInfo v-if="planet.Name" :planetInfo="planet" :key="info" />
    </div>
    <div v-else class="absolute top-1/2 left-1/2 transition -translate-x-1/2 text-white">
        <div class="w-64 h-20 flex items-center justify-around">

            <router-link to="/"
                class="cursor-pointer border border-white p-2 break-before-avoid  hover:bg-white hover:text-black">Cancel
                Trip</router-link>
            <h1 @click="notCancel()" class="cursor-pointer border border-white p-2 break-before-avoid  hover:bg-white hover:text-black">Continiue</h1>
        </div>
    </div>
</template>