<script setup>
import Spline from "spline-vue/v3";
const scene = "https://prod.spline.design/cVJ2lpzJ3M-tVA72/scene.splinecode";
</script>
<template>
    <div class="max-w-3xl mx-auto" >
  <Spline :scene="scene" style="display: block; width: 100%; height: 100%;"/>
</div>
</template>