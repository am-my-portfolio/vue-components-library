<template>
  <div class="hidden md:flex px-4">
    <BaseButton :text=text />
  </div>

  <button class="flex md:hidden px-4 text-btn-txt hover:text-btn-hover">
    <i class="fa-solid fa-arrow-right-to-bracket text-3xl"></i>
  </button>
</template>

<script setup lang="ts">
import { BaseButton } from "@/components";
defineProps({
  text: String,
  disabled: Boolean,
});
</script>
