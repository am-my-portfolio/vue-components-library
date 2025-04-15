<template>
  <div class="flex w-full items-center rounded-md">
    <a v-for="item in items" :key="item.name" :href="item.href" target="_blank" :class="[
      txtColor,
      'flex justify-around text-2xl',
      'w-full p-4',
      'border-t-2 border-pop-primary',
      item.hidden ? 'hidden' : '',
    ]">
      <span class="sr-only">{{ item.name }}</span>
      <span :class="item.icon"></span>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  txtColor: String, // text-pop-primary hover:text-pop-secondary 
  bgColor: String,
  items: {
    name: string;
    icon: string;
    href?: string;
    hidden?: boolean;
  }[];
}>();
</script>
