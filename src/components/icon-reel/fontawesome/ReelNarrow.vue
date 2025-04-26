<template>
  <div class="flex justify-center space-x-6 md:order-2">
    <a v-for="item in items" :key="item.name" :href="item.href" :hidden="item.hidden" :class="[
      'hover:text-pop-primary',
      'text-lg']" target="_blank">
      <span class="sr-only fixed">{{ item.name }}</span>
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
