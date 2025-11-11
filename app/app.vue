<script lang="ts" setup>
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#171717' : 'white')

import {Analytics} from '@vercel/analytics/nuxt';

useHead({
  meta: [
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {key: 'theme-color', name: 'theme-color', content: color}
  ],
  link: [
    {rel: 'icon', type: 'image/png', href: '/logos/logo.png'}
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/landing-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/landing-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <Analytics/>
    <AppHeader/>

    <UMain>
      <NuxtPage/>
    </UMain>

    <AppFooter/>
  </UApp>
</template>
