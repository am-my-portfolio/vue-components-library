<template>
  <div class="flex space-x-4 md:space-x-8">
    <a
      v-for="item in items"
      :key="item.name"
      :href="item.href"
      target="_blank"
      :class="[
        'text-pop-primary hover:text-pop-secondary',
        'text-2xl md:text-6xl',
        item.hidden ? 'hidden' : '',
      ]"
    >
      <span class="sr-only">{{ item.name }}</span>
      <span :class="item.icon"></span>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: {
    name: string;
    icon: string;
    href?: string;
    hidden?: boolean;
  }[];
}>();
</script>
