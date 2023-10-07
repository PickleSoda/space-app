
<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import { useMainStore } from "@/stores/main"; // Import your Pinia store

import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
 const options = {
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 80,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "out",
      random: false,
      speed: 0.2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 600,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  retina_detect: true,
};
const optionsStars = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 2,
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.1,
      direction: "top",
      random: true,
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: false,
      },
      onHover: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
    },
  },
  retina_detect: true,
};

// Retrieve the Pinia store instance
const mainStore = useMainStore();

// Vue Router instance
const router = useRouter();

const particlesInit = async (engine: Engine) => {
    await loadFull(engine);

    console.log(engine);
};

const particlesLoaded = async (container: Container) => {
    console.log(container);
};

</script>

<template>

       
  <vue-particles id="tsparticles-stars" :options="optionsStars" :particlesInit="particlesInit"
  :particlesLoaded="particlesLoaded" />
  <vue-particles id="tsparticles-zodiac" :options="options" :particlesInit="particlesInit"
  :particlesLoaded="particlesLoaded" />
  <RouterView />
</template>