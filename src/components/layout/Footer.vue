<template>
  <footer id="ogs-footer" :class="[
    'md:flex px-3 py-3 md:py-6',
    'text-pop-secondary',
    'md:items-center md:justify-between',
    'border-t-2 border-pop-secondary'
  ]">
    <div id="ogs-footer-socials" class="md:order-2 text-center justify-center space-x-6 ">
      <a v-for="item in items" :key="item.name" :href="item.href" class="hover:text-pop-primary text-lg"
        target="_blank">
        <span class="sr-only fixed">{{ item.name }}</span>
        <span :class="item.icon"></span>
      </a>
    </div>

    <div id="ogs-footer-copyright" class="md:order-1 mt-3 md:mt-0 space-x-2 text-center text-sm leading-5">
      <i class="fa-regular fa-copyright"></i>
      <span>{{ copyright }}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
// TODO: create an Interface for this
defineProps<{
  copyright: string;
  items: {
    name: string;
    href: string;
    icon: string;
  }[]
}>()

// Example 
// https://fontawesome.com/search
// const socials = [
//   {
//     name: "website",
//     href: "https://afshan-martin.pages.dev",
//     icon: "fa-solid fa-globe",
//   },
//   {
//     name: "GitHub",
//     href: "https://github.com/afshanaman81",
//     icon: "fa-brands fa-github",
//   },
//   {
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/in/afshan-aman",
//     icon: "fa-brands fa-linkedin",
//   },
//   {
//     name: "X",
//     href: "https://x.com/XXXXX",
//     icon: "fa-brands fa-twitter",
//   },
//   {
//     name: "Instagram",
//     href: "https://instagram.com/XXXXX",
//     icon: "fa-brands fa-instagram",
//   },
//   {
//     name: "facebook",
//     href: "https://discord.gg/XXXXXX",
//     icon: "fa-brands fa-facebook",
//   },
//   {
//     name: "Discord",
//     href: "https://discord.gg/XXXXXX",
//     icon: "fa-brands fa-discord",
//   },
//   {
//     name: "YouTube",
//     href: "https://www.youtube.com/XXXXX",
//     icon: "fa-brands fa-youtube",
//   },
// ];
</script>
