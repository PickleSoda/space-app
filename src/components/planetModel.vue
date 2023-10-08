<script setup>
import Spline from "spline-vue/v3";
const props = defineProps({
  url: {
    type: String,
  }
})
const scene = props.url;
</script>
<template>
  <div class="max-w-4xl mx-auto z-30 relative bg-transparent">
    <Spline v-if="scene" :scene="scene" />
  </div>
</template>

<style></style>