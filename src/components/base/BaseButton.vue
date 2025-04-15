<template>
  <button :class="[
    txtColor,
    bgColor,
    'w-fit px-12 py-3',
    'text-lg font-semibold',
    'transition rounded-lg shadow-lg hover:border-transparent']">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  txtColor: String, // text-white hover:text-primary
  bgColor: String, // bg-pop-secondary/50 hover:bg-pop-primary 
  text: String,
});
</script>
