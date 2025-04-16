<template>
  <button :class="[
    'w-fit px-12 py-3',
    'text-lg font-semibold',
    'text-pop-primary hover:text-dull-primary',
    'bg-pop-secondary/50 hover:bg-pop-primary ',
    'transition rounded-lg shadow-lg hover:border-transparent']">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: String,
});
</script>
