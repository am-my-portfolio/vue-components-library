<template>
  <button :disabled="disabled" :class="[
    disabled
      ? 'bg-btn-disabled cursor-not-allowed'
      : 'bg-btn-primary dark:bg-btn-primary hover:bg-btn-hover hover:text-btn-txt',
    'min-w-36 w-fit md:px-12 py-3',
    'text-sm md:text-lg font-semibold text-btn-txt',
    'rounded-md transition shadow-lg hover:border-transparent',
  ]">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: String,
  disabled: Boolean,
});
</script>
