<template>
  <header class="fixed inset-x-0 top-0 z-40 border-b border-orange-50 bg-white/90 backdrop-blur">
    <div class="mx-auto flex h-16 sm:h-20 lg:h-32 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <NuxtLink aria-label="Zur Startseite" class="inline-flex items-center gap-3" to="/">
        <img alt="Money Koi logo" class="w-[36px] sm:w-[40px] lg:w-[64px]" src="/logos/logo.png"/>
        <span class="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-slate-900">Money Koi</span>
      </NuxtLink>

      <nav class="hidden gap-8 text-base font-medium text-slate-600 sm:flex">
        <NuxtLink class="transition hover:text-slate-900" to="/features">Funktionen</NuxtLink>
        <NuxtLink class="transition hover:text-slate-900" to="/roadmap">Roadmap</NuxtLink>
        <NuxtLink class="transition hover:text-slate-900" to="/contact">Kontakt</NuxtLink>
      </nav>

      <button
          :aria-expanded="open ? 'true' : 'false'"
          aria-label="Menü öffnen"
          class="sm:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 ring-1 ring-orange-100"
          @click="open = !open"
      >
        <Icon v-if="!open" class="h-5 w-5" name="radix-icons:hamburger-menu"/>
        <Icon v-else class="h-5 w-5" name="radix-icons:cross-2"/>
      </button>
    </div>

    <transition name="fade">
      <div v-if="open" class="sm:hidden">
        <div class="fixed inset-0 z-30 bg-black/20" @click="open = false"/>
        <div
            class="absolute inset-x-0 top-full z-40 origin-top rounded-b-2xl border-b border-orange-100 bg-white shadow-xl"
        >
          <nav class="mx-auto max-w-6xl px-4 py-4 text-base font-medium text-slate-700">
            <ul class="space-y-2">
              <li>
                <NuxtLink class="block rounded-lg px-3 py-2 hover:bg-orange-50" to="/features" @click="open = false">
                  Funktionen
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="block rounded-lg px-3 py-2 hover:bg-orange-50" to="/roadmap" @click="open = false">
                  Roadmap
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="block rounded-lg px-3 py-2 hover:bg-orange-50" to="/contact" @click="open = false">
                  Kontakt
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script lang="ts" setup>
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .18s ease
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0
}
</style>
