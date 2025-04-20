<template>
  <div
    class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-pop-secondary bg-dull-primary px-2"
  >
    <div class="flex m-2 shrink-0 justify-left border-b border-dull-secondary">
      <img src="/background.png" alt="logo" class="h-20 rounded-md" />
    </div>

    <SideNavigation
      :level="1"
      :primary_items="primary_navigation"
      :secondary_items="secondary_navigation"
    />
  </div>
</template>

<script setup lang="ts">
import { primary_navigation, secondary_navigation } from '@/helpers/navigation';
import SideNavigation from './SideNavigation.vue';
</script>
