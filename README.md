# Introduction
A set of Vuejs (v3) components build with Tailwindcss (v4), Fontawesome, and Iconify.


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
