<script setup>
import Spline from "spline-vue/v3";
const scene = "https://prod.spline.design/EMVkGBQppOHNnrlL/scene.splinecode";
</script>
<template>
    <div class="p-10 max-w-5xl mx-auto">
  <Spline :scene="scene" class="aboslute"/>
</div>
</template>

<style></style>