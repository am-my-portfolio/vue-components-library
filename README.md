# Introduction
A set of Vuejs (v3) components build with Tailwindcss, Fontawesome, and Iconify.


# Usage

```
<template>
    <div class="mt-10 text-center">
        <BaseButton 
        text="Log In" 
        click="handleLogin" 
        :disabled="disabled" 
        />
    </div>
</template>

<script setup lang="ts">
import { BaseButton } from '@am-ogs'
</script>
