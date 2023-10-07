
<script setup>
import { RouterView, RouterLink, useRouter } from "vue-router";
import { useMainStore } from "@/stores/main"; // Import your Pinia store

// Retrieve the Pinia store instance
const mainStore = useMainStore();

// Vue Router instance
const router = useRouter();

</script>

<template>>
      <!-- Render the RouterView if the user is authenticated -->
      <RouterView />
</template>