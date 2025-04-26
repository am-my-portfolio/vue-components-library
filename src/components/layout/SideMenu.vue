<template>
  <div
    class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-pop-secondary bg-dull-primary px-2"
  >
    <div class="flex m-2 shrink-0 justify-left border-b border-dull-secondary">
      <slot name="logo" />
    </div>

    <SideNavigation
      :level="1"
      :primary_navigation="primary_navigation"
      :secondary_navigation="secondary_navigation"
    />
  </div>
</template>

<script setup lang="ts">
import SideNavigation from "./SideNavigation.vue";

defineProps<{
  primary_navigation: any[];
  secondary_navigation: any[];
}>();
</script>
