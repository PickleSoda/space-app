<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h5 class="text-2xl font-bold text-space-lightyellow animate-ping">
      Loading ...
    </h5>
    <img src="../assets/rocket-svgrepo-com.svg" class="m-5 w-20 rocket" />
    <h4 class="text-2xl font-bold text-space-lightyellow animate-bounce">
      {{ randText() }}
    </h4>
  </div>
</template>

<script setup>
const randText = () => {
  const texts = ["fact1", "fact2", "fact3", "fact4"];
  return texts[(Math.random() * texts.length) | 0];
};
</script>

<style>
@keyframes move-rotate {
  0% {
    transform: translate(-30px, -10px) rotate(45deg);
  }

  100% {
    transform: translate(30px, 10px) rotate(45deg);
  }
}

.rocket {
  animation: move-rotate 5s alternate infinite;
}
</style>
