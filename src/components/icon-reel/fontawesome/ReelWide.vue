<template>
  <div class="flex w-full items-center rounded-md">
    <a v-for="item in items" :key="item.name" :href="item.href" target="_blank" :class="[
      'w-full p-4',
      'flex justify-around text-2xl',
      'border-t-2 border-pop-primary',
      'text-pop-primary hover:text-pop-secondary',
      item.hidden ? 'hidden' : '',
    ]">
      <span class="sr-only">{{ item.name }}</span>
      <span :class="item.icon"></span>
    </a>
  </div>
</template>

<script setup lang="ts">
// TODO: make an interface for this
defineProps<{
  items: {
    name: string;
    icon: string;
    href?: string;
    hidden?: boolean;
  }[];
}>();
</script>
