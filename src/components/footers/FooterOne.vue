<template>
  <footer id="ogs-footer-one" :class="[
    'md:flex p-3',
    'border-t-2',
    colors?.border,
    colors?.text,
    'md:items-center md:justify-between',
  ]">
    <div id="ogs-footer-socials" class="md:order-2 text-center justify-center space-x-5">
      <a v-for="item in socials" :key="item.name" :href="item.href" target="_blank" :class="[colors?.txt_hover]">
        
        <span :class="item.icon">a</span>
      </a>
    </div>

    <div id="ogs-footer-copyright" class="md:order-1 mt-3 md:mt-0 space-x-2 text-center text-xs">
      <i class="fa-regular fa-copyright"></i>
      <span>{{ copyright_year }} - Present. All Rights Reserved</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IFooterProps } from "./types";

defineProps<IFooterProps>();
</script>
