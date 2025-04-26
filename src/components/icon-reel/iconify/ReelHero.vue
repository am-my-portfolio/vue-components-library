<template>
  <div class="flex w-full gap-4 items-center">
    <a v-for="item in items" :key="item.name" :href="item.href" target="_blank">
      <span class="sr-only fixed">{{ item.name }}</span>
      <Icon :icon="item.icon" :class="[
        'text-xl md:text-3xl lg:text-5xl',
        'text-pop-primary hover:text-pop-secondary',
      ]" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"; // https://iconify.design/docs/icon-components/vue/

defineProps<{
  items: {
    name: string;
    icon: string;
    href?: string;
    hidden?: boolean;
  }[];
}>();
</script>
