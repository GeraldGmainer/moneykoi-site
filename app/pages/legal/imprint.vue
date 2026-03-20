<template>
  <main class="bg-[#FFFDF8] text-slate-900">
    <PageHeader
        :blob="true"
        :border="true"
        :eyebrow="$t('imprint.header.eyebrow')"
        :subtitle="$t('imprint.header.subtitle')"
        :title="$t('imprint.header.title')"
        align="left"
    />

    <section class="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="rounded-3xl border border-orange-100 bg-white/95 shadow-sm shadow-orange-50/70 p-12">
        <div class="mt-8">
          <div>
            <h2 class="text-lg font-semibold">{{ $t('imprint.provider') }}</h2>
            <p class="mt-2">
              Gerald Gmainer<br>
              Money Koi
            </p>
          </div>

          <div class="pt-6">
            <h2 class="text-lg font-semibold">{{ $t('imprint.address') }}</h2>
            <p class="mt-2">Am Platzl 3<br>4451 Garsten<br>Österreich</p>
          </div>

          <div class="pt-6">
            <h2 class="text-lg font-semibold">{{ $t('imprint.contact') }}</h2>
            <p class="mt-2">
              {{ $t('imprint.emailLabel') }}: <a class="underline decoration-slate-300 hover:decoration-slate-700" href="mailto:moneykoi.app@gmail.com">moneykoi.app@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const {t} = useI18n()

useSeoMeta({
  title: () => t('imprint.meta.title'),
  description: () => t('imprint.meta.description')
})
</script>