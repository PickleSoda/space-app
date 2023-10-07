<template>
    <div>
      <Spline
        :scene="scene"
        :onLoad="onLoad"
      />
      <button class="p-10 m-10 bg-white" type="button" @click="triggerAnimation">
        Trigger Spline Animation
      </button>
    </div>  
  </template>
  <script lang="ts">
  /**
   * Example For Vue3
   */
  import { defineComponent, ref } from "vue"
  import Spline from "spline-vue/v3";
  import type { Application, SPEObject } from "@splinetool/runtime";
  
  export default defineComponent({
    components: { Spline },
    setup() {
      const scene = ref(
        "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
      );
      const spline = ref<Application>();
      const cube = ref<SPEObject>();
  
      const onLoad = (splineApp: Application) => {
        // save the app in a ref for later use
        spline.value = splineApp;
      }
      
      const triggerAnimation = (e) => {

        spline.value?.emitEvent('mouseHover', 'Cube');
        /**
         * Or you can query the spline object first, and then trigger the event:
         * 
         */
        cube.value?.emitEvent("mouseHover");
      };
  
      return {
        scene,
        onLoad,
        triggerAnimation,
      };
    }
  })
  </script>