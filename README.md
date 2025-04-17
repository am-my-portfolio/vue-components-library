# Introduction
A set of Vuejs (v3) components build with Tailwindcss (v4), Fontawesome, and Iconify.

#### TailwindCss
- https://tailwindcss.com/
- https://tailwindcss.com/docs/installation/using-vite

#### Fontawesome
- https://fontawesome.com/icons
- https://docs.fontawesome.com/web/use-with/vue

#### Iconify
- https://iconify.design/
- https://iconify.design/docs/icon-components/vue/



# Usage
- `npm i @am-ogs/vue-ui`
- `pnpm add @am-ogs/vue-ui`
- `yarn add @am-ogs/vue-ui`

```
<template>
    <div class="mt-10 text-center">
        <BaseButton 
            text="Log In" 
            @click="handleLogin" 
            :disabled="disabled" 
        />
    </div>
</template>

<script setup lang="ts">
import { BaseButton } from '@am-ogs/vue-ui'
</script>
