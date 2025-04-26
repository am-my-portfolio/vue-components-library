<template>
  <!-- Navigation Bar -->
  <nav
    :class="[
      'flex w-full',
      'bg-dull-primary',
      'items-center justify-between',
      'border-b border-pop-secondary shadow-lg',
    ]"
  >
    <!-- Logo -->
    <div class="flex items-center">
      <slot name="logo" />
    </div>

    <!-- Navigation Links (Hidden on Small Screens) -->
    <div class="hidden md:flex space-x-8 pt-6 text-pop-secondary font-medium">
      <div v-for="item in landing_page_navigation" :key="item.action">
        <a href="#" @click="handler" class="hover:text-pop-primary transition">
          {{ item.name }}
        </a>
      </div>

      <div class="ml-24">
        <slot name="themeToggle" />
      </div>
    </div>

    <slot name="loginButton" />
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  handler: any;
  landing_page_navigation: any[];
}>();
</script>
