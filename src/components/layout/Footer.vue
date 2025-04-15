<template>
  <footer>
    <div class="px-4 py-8 md:flex md:items-center md:justify-between text-pop-secondary">
      <div class="flex justify-center space-x-6 md:order-2">
        <a v-for="item in items" :key="item.name" :href="item.href" class="hover:text-pop-primary text-lg"
          target="_blank">
          <span class="sr-only">{{ item.name }}</span>
          <span :class="item.icon"></span>
        </a>
      </div>

      <div class="md:order-1 mt-5 md:mt-0">
        <p class="text-center text-sm leading-5">
          <i class="fa-regular fa-copyright"></i> {{ copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  copyright: string
  items: {
    name: string;
    href: string;
    icon: string;
  }[]
}>()
</script>
