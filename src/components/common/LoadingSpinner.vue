<template>
  <i :class="[
    txtColor,
    bgColor,
    'mt-1',
    'text-xl',
    'fa-regular fa-sync fa-spin']" aria-hidden="true"></i>
</template>

<script setup lang="ts">

defineProps({
  txtColor: String, // text-pop-secondary 
  bgColor: String,
  text: String,
});
</script>