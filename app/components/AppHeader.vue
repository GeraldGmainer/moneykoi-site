<template>
  <header class="sticky top-0 z-20 border-b border-orange-50 bg-white/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <NuxtLink aria-label="Zur Startseite" class="inline-flex items-center gap-3 cursor-pointer" to="/">
        <img alt="Money Koi logo" class="h-25 w-25 pointer-events-none" src="/logos/logo.png"/>
        <span class="text-xl font-semibold tracking-tight sm:text-2xl text-slate-900">Money Koi</span>
      </NuxtLink>

      <nav class="hidden gap-8 text-base font-medium text-slate-600 sm:flex">
        <NuxtLink class="cursor-pointer transition hover:text-slate-900" to="/features">Funktionen</NuxtLink>
        <NuxtLink class="cursor-pointer transition hover:text-slate-900" to="/roadmap">Roadmap</NuxtLink>
        <NuxtLink class="cursor-pointer transition hover:text-slate-900" to="/contact">Kontakt</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
</script>
