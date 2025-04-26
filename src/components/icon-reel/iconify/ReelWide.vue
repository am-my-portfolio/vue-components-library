<template>
  <div class="flex w-full items-center rounded-md">
    <a
      v-for="item in items"
      :key="item.name"
      :href="item.href"
      target="_blank"
      :class="[
        'flex w-full p-4 justify-around text-pop-primary hover:text-pop-secondary text-2xl border-pop-primary border-t-2',
        item.hidden ? 'hidden' : '',
      ]"
    >
      <span class="sr-only fixed">{{ item.name }}</span>
      <Icon :icon="item.icon" class="text-6xl" />
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
