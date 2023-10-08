<template>
  <button
    class="p-5 border-2 border-space-darkblue rounded-2xl bg-opacity-0 text-space-yellow hover:bg-opacity-100 hover:bg-space-blue hover:text-space-lightyellow transition duration-500 ease-in-out">
    {{ buttonText }}
  </button>
</template>

<script setup>
defineProps({
  buttonText: String,
});
</script>
