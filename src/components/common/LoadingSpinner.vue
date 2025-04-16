<template>
  <i :class="[
    'mt-1',
    'text-xl text-pop-secondary',
    'fa-regular fa-sync fa-spin']" aria-hidden="true"></i>
</template>

<script setup lang="ts">

defineProps({
  text: String,
});
</script>