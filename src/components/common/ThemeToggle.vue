<template>
  <div @click="toggleDark()" class="flow-root">
    <p class="float-left mr-4">
      <component v-if="!is_dark" :is="MoonIcon" :class="['text-pop-secondary', 'w-6 shrink-0']" aria-hidden="true" />
      <component v-if="is_dark" :is="SunIcon" :class="['text-pop-secondary', 'w-6 shrink-0']" aria-hidden="true" />
    </p>
    <p v-if="is_authenticated" class="float-right pt-1 text-pop-secondary">
      {{ is_dark ? "Go Light" : "Go Dark" }} Theme
    </p>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";

const is_dark = useDark();
const toggleDark = useToggle(is_dark);

defineProps<{
  is_authenticated: Boolean;
}>();
</script>
