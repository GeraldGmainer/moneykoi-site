<template>
  <header class="fixed inset-x-0 top-0 z-40 border-b border-orange-50 bg-white/90 backdrop-blur">
    <div class="mx-auto flex h-16 sm:h-20 lg:h-32 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <NuxtLink :aria-label="$t('header.homeAriaLabel')" class="inline-flex items-center gap-3" to="/">
        <img alt="Money Koi logo" class="w-[36px] sm:w-[40px] lg:w-[92px]" src="/logos/logo.png"/>
        <span class="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-slate-900">Money Koi</span>
      </NuxtLink>

      <div class="hidden sm:flex items-center gap-8 text-base font-medium text-slate-600">
        <nav class="flex gap-8">
          <NuxtLink :to="localePath('/features')" class="transition hover:text-slate-900">{{ $t('header.features') }}</NuxtLink>
          <NuxtLink :to="localePath('/roadmap')" class="transition hover:text-slate-900">{{ $t('header.roadmap') }}</NuxtLink>
          <NuxtLink :to="localePath('/faq')" class="transition hover:text-slate-900">{{ $t('header.faq') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="transition hover:text-slate-900">{{ $t('header.contact') }}</NuxtLink>
          <UButton to="https://my.moneykoi.app"  label="Go to App"   external  />
        </nav>

        <div class="flex items-center gap-2 border-l border-slate-200 pl-8">
          <button
              :class="locale === 'de' ? 'text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-900 transition'"
              @click="setLocale('de')"
          >
            DE
          </button>
          <span class="text-slate-300">|</span>
          <button
              :class="locale === 'en' ? 'text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-900 transition'"
              @click="setLocale('en')"
          >
            EN
          </button>
        </div>
      </div>

      <button
          :aria-expanded="open ? 'true' : 'false'"
          :aria-label="$t('header.menuAriaLabel')"
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
        <div class="absolute inset-x-0 top-full z-40 origin-top rounded-b-2xl border-b border-orange-100 bg-white shadow-xl">
          <nav class="mx-auto max-w-6xl px-4 py-4 text-base font-medium text-slate-700">
            <ul class="space-y-2">
              <li>
                <NuxtLink class="block rounded-lg px-3 py-2 hover:bg-orange-50" to="/features" @click="open = false">
                  {{ $t('header.features') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="block rounded-lg px-3 py-2 hover:bg-orange-50" to="/roadmap" @click="open = false">
                  {{ $t('header.roadmap') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="block rounded-lg px-3 py-2 hover:bg-orange-50" to="/faq" @click="open = false">
                  {{ $t('header.faq') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="block rounded-lg px-3 py-2 hover:bg-orange-50" to="/contact" @click="open = false">
                  {{ $t('header.contact') }}
                </NuxtLink>
              </li>

              <li class="mt-4 pt-4 border-t border-orange-100 flex items-center gap-4 px-3">
                <button
                    :class="locale === 'de' ? 'text-slate-900 font-bold' : 'text-slate-500'"
                    @click="setLocale('de'); open = false"
                >
                  Deutsch
                </button>
                <span class="text-slate-300">•</span>
                <button
                    :class="locale === 'en' ? 'text-slate-900 font-bold' : 'text-slate-500'"
                    @click="setLocale('en'); open = false"
                >
                  English
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()
const {locale, setLocale} = useI18n()
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