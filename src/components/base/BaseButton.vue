<template>
  <button :disabled="disabled" :class="[
    disabled,
    'w-fit min-w-44 max-w-72 px-12 py-3',
    'text-md md:text-lg font-semibold',
    'text-pop-primary hover:text-dull-primary',
    'bg-pop-secondary/50 hover:bg-pop-primary ',
    'transition rounded-lg shadow-lg hover:border-transparent']">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: String,
  disabled: Boolean,
});
</script>
