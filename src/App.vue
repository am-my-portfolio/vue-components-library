<template>
  <SiteLayout :is_authenticated="isAuthenticated">
    <template #sideMenu>
      <SideMenu :level="1" :primary_navigation="primary_navigation" :secondary_navigation="secondary_navigation">
        <template #logo>
          <img src="/background.png" alt="logo" class="h-20 rounded-md" />
        </template>
      </SideMenu>
    </template>

    <template #header>
      <Header>
        <template #profileButton>
          <BaseButton />
        </template>
      </Header>
    </template>

    <template #topNavigation>
      <!-- <TopNavigation @scroll:to="handleScroll" /> -->
    </template>

    <template #toast></template>

    <template #routerView>
      <router-view v-if="!isLoading" />
    </template>

    <template #footer>
      <FooterOne copyright_year="2025" :socials="socials" :colors="{
        text: 'text-lime-700',
        border: 'border-yellow-700',
        txt_hover: 'hover:text-red-500',
      }" />

      <FooterTwo copyright_year="2025" :socials="socials" :policies="policies" :colors="{
        text: 'text-lime-700',
        border: 'border-yellow-700',
        txt_hover: 'hover:text-red-500',
      }" />

      <FooterThree copyright_year="2025" :socials="socials" :policies="policies" :colors="{
        text: 'text-lime-700',
        border: 'border-yellow-700',
        txt_hover: 'hover:text-red-500',
      }" />
    </template>
  </SiteLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  BaseButton,
  Header,
  SiteLayout,
  SideMenu,
  FooterOne,
  FooterTwo,
  FooterThree
} from "@/components";
import {
  landing_page_navigation,
  primary_navigation,
  secondary_navigation,
} from "@/helpers/navigation";

const isAuthenticated = ref(false);
const isLoading = ref(false);

const socials = [
  {
    name: "website",
    href: "https://abc.com",
    icon: "fa-solid fa-globe",

  },
  {
    name: "GitHub",
    href: "https://github.com/abc-com",
    icon: "fa-brands fa-github",
    hidden: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/abc/",
    icon: "fa-brands fa-linkedin",
  },
];

const policies = [
  {
    text: 'Waitlist Privacy Notice',
    href: '/waitlist-policy'
  },
  {
    text: 'Privacy Policy',
    href: '/privacy-policy'
  }
]

const handleScroll = async (value: any) => {
  console.log("scrolling to", value);

  // for (const item of landing_page_navigation) {
  //   if (item.action === value) {
  //     item.ref.value = document.getElementById(item.action);
  //     item.ref.value?.scrollIntoView({ behavior: "smooth" });
  //   }
  // }
};
</script>
