<template>
  <!-- https://iriscompanyio.medium.com/how-to-build-recursive-side-navbar-menu-component-with-vue-3-e87878fb94b6 -->

  <nav class="flex flex-1 flex-col">
    <ul role="list" class="flex flex-1 flex-col mt-2">
      <li v-for="(item, index) in primary_navigation" :key="index">
        <div :class="['cursor-pointer', 'w-full rounded-md my-2']">
          <a
            :href="`/${kebabCase(item.name)}`"
            :class="[
              item.current
                ? 'bg-dull-primary text-pop-secondary'
                : 'text-pop-secondary hover:bg-pop-secondary hover:text-dull-primary',

              'group flex gap-x-3 rounded-md py-2 text-base leading-6',
            ]"
          >
            <div class="flex group">
              <i
                :class="item.icon"
                class="text-lg mx-2 w-10 shrink-0"
                aria-hidden="true"
              ></i>
              {{ item.name }}
            </div>
          </a>
        </div>
      </li>
    </ul>

    <ul role="list" class="flex flex-col mt-auto mb-10">
      <li v-for="(item, index) in secondary_navigation" :key="index">
        <div :class="['cursor-pointer', 'w-full rounded-md my-2']">
          <a
            :href="`/${kebabCase(item.name)}`"
            :class="[
              item.current
                ? 'bg-dull-primary text-pop-secondary'
                : 'text-pop-secondary hover:bg-pop-secondary hover:text-dull-primary',

              'group flex gap-x-3 rounded-md py-2 text-base leading-6',
            ]"
          >
            <div class="flex group">
              <i
                :class="item.icon"
                class="text-lg mx-2 w-10 shrink-0"
                aria-hidden="true"
              ></i>
              {{ item.name }}
            </div>
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { kebabCase } from "lodash";

defineProps<{
  level: number;
  primary_navigation: any[];
  secondary_navigation: any[];
}>();
</script>
