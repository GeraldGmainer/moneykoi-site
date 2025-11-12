<script lang="ts" setup>
import {Analytics} from '@vercel/analytics/nuxt'
import AnalyticsConsent from './components/AnalyticsConsent.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'

const color = computed(() => 'white')

useHead({
  meta: [
    {name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover'},
    {key: 'theme-color', name: 'theme-color', content: color}
  ],
  link: [{rel: 'icon', type: 'image/png', href: '/logos/logo.png'}],
  htmlAttrs: {lang: 'de'},
  bodyAttrs: {
    class: 'min-h-[100svh] bg-gradient-to-b from-[#FFFDF8] to-[#FFF6EB] text-slate-900 overflow-x-hidden'
  },
  titleTemplate: t => (t ? `Money Koi | ${t}` : 'Money Koi')
})

useSeoMeta({
  ogVideo: '/videos/moneykoi_demo.mp4',
  ogImage: '/images/screen1.png',
  twitterImage: '/social/og.png',
  twitterCard: 'summary_large_image'
})

const {consent, decided, ready, accept, decline} = useAnalyticsConsent()
</script>

<template>
  <div class="min-h-[100svh] flex flex-col">
    <AppHeader/>
    <main
        class="flex-1 pt-[calc(env(safe-area-inset-top)+60px)] sm:pt-[calc(env(safe-area-inset-top)+96px)] lg:pt-[128px] min-h-[calc(100svh-56px)]"
        style="content-visibility:auto; contain-intrinsic-size:1px 1000px"
    >
      <NuxtPage/>
    </main>
    <div class="mt-auto">
      <AppFooter/>
    </div>
    <Analytics v-if="consent"/>
    <AnalyticsConsent v-if="ready && !decided" @accept="accept" @decline="decline"/>
  </div>
</template>
