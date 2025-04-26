<template>
  <!-- 
  A Footer component which is fixed to the bottom of the page, is responsive for different screen dimensions. It consists of 3 parts.
  Each part is split on two lines. 
  
  On wide screens, the 3 parts are horizontally aligned, and stretched along the width of the screen (justified-between)
    left: Copyright information
    middel: Socials
    right: Privacy Policies

  On mobile screens, the 3 parts are vertically aligned, and center justified
  -->
  <footer id="ogs-footer-two" :class="[
    'md:flex p-2',
    'text-xs',
    colors?.text,
    'border-t-2',
    colors?.border,
  ]">
    <!-- wide screen -->
    <div class="hidden md:flex md:w-full md:justify-between md:py-2">
      <div class="md:order-1">
        <div class="flex-1 text-left">
          <div class="flex space-x-1">
            <i class="fa-regular fa-copyright"></i>
            <span>{{ copyright_year }} - Present</span>
          </div>
          <span>All Rights Reserved</span>
        </div>
      </div>

      <div class="md:order-2">
        <div class="flex flex-col text-center justify-center">
          <div id="ogs-footer-socials" class="space-x-5">
            <a v-for="item in socials" :hidden="item.hidden" :key="item.name" :href="item.href"
              :class="[colors?.txt_hover]" target="_blank">
              
              <span :class="[item.icon, 'text-lg']"></span>
            </a>
          </div>
          <span class="leading-5 tracking-[5px]">Follow Us</span>
        </div>
      </div>

      <div class="md:order-3">
        <div class="flex flex-col text-right">
          <div v-for="policy in policies">
            <a :href="policy.href" target="_blank" :class="[
              'underline visited:text-purple-600', colors?.text,
              colors?.txt_hover,
            ]">{{ policy.text }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- small screen -->
    <div class="flex-col md:hidden">
      <div class="order-1">
        <div class="flex space-x-2 items-center justify-center">
          <a v-for="item in socials" :hidden="item.hidden" :key="item.name" :href="item.href"
            :class="['space-x-6', colors?.txt_hover]" target="_blank">
            
            <span :class="[item.icon, 'text-lg']"></span>
          </a>
          <span class="leading-6 font-thin">|</span>
          <span class="leading-7">Follow Us</span>
        </div>
      </div>

      <div class="order-2">
        <div class="flex space-x-2 items-center justify-center">
          <div v-for="(policy, index) in policies" class="space-x-2">
            <a :href="policy.href" target="_blank" :class="[
              'underline visited:text-purple-600', colors?.text,
              colors?.txt_hover,
            ]">{{ policy.text }}</a>
            <span v-if="policies?.length && index < policies.length - 1" class="leading-6 font-thin">|</span>
          </div>
        </div>
      </div>

      <div class="order-3">
        <div class="flex text-left space-x-1 items-center justify-center">
          <div class="flex space-x-1">
            <i class="fa-regular fa-copyright"></i>
            <span>{{ copyright_year }} - Present.</span>
          </div>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IFooterProps } from "./types";

defineProps<IFooterProps>();
</script>
