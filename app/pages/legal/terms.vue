<template>
  <main class="relative bg-[#FFFDF8] text-slate-900 overflow-x-clip">
    <PageHeader
        :blob="true"
        :border="true"
        :eyebrow="$t('terms.header.eyebrow')"
        :subtitle="$t('terms.header.subtitle')"
        :title="$t('terms.header.title')"
        align="left"
    />

    <section class="relative border-b border-orange-50 bg-gradient-to-b from-[#FFFDF8] to-[#FFF6EB]">
      <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">

        <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
          <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.one.title') }}</h2>
          <p class="mt-3 text-slate-700 text-sm lg:text-base">
            {{ $t('terms.sections.one.text', {app: 'Money Koi', name: 'Gerald Gmainer', address: 'Am Platzl 3 / 3, 4451 Garsten, Österreich'}) }}
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE4D5] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">{{ $t('terms.sections.two.tag') }}</div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.two.title') }}</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li v-for="(item, index) in $tm('terms.sections.two.list')" :key="index" class="list-disc ml-5">{{ $rt(item) }}</li>
            </ul>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE8DB] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">{{ $t('terms.sections.three.tag') }}</div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.three.title') }}</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li v-for="(item, index) in $tm('terms.sections.three.list')" :key="index" class="list-disc ml-5">{{ $rt(item) }}</li>
            </ul>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE6DE] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">{{ $t('terms.sections.four.tag') }}</div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.four.title') }}</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li v-for="(item, index) in $tm('terms.sections.four.list')" :key="index" class="list-disc ml-5">
                {{ $rt(item, {email: 'moneykoi.app@gmail.com'}) }}
              </li>
            </ul>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE4D5] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">{{ $t('terms.sections.five.tag') }}</div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.five.title') }}</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li v-for="(item, index) in $tm('terms.sections.five.list')" :key="index" class="list-disc ml-5">{{ $rt(item) }}</li>
            </ul>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFEBDD] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">{{ $t('terms.sections.six.tag') }}</div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.six.title') }}</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li v-for="(item, index) in $tm('terms.sections.six.list')" :key="index" class="list-disc ml-5">{{ $rt(item) }}</li>
            </ul>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE3D3] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">{{ $t('terms.sections.seven.tag') }}</div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.seven.title') }}</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li v-for="(item, index) in $tm('terms.sections.seven.list')" :key="index" class="list-disc ml-5">{{ $rt(item) }}</li>
            </ul>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE8DB] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">{{ $t('terms.sections.eight.tag') }}</div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.eight.title') }}</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li v-for="(item, index) in $tm('terms.sections.eight.list')" :key="index" class="list-disc ml-5">{{ $rt(item) }}</li>
            </ul>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE6DE] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">{{ $t('terms.sections.nine.tag') }}</div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.nine.title') }}</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li v-for="(item, index) in $tm('terms.sections.nine.list')" :key="index" class="list-disc ml-5">{{ $rt(item) }}</li>
            </ul>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE4D5] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">{{ $t('terms.sections.ten.tag') }}</div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.ten.title') }}</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li v-for="(item, index) in $tm('terms.sections.ten.list')" :key="index" class="list-disc ml-5">{{ $rt(item) }}</li>
            </ul>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFEBDD] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">{{ $t('terms.sections.eleven.tag') }}</div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.eleven.title') }}</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li v-for="(item, index) in $tm('terms.sections.eleven.list')" :key="index" class="list-disc ml-5">{{ $rt(item) }}</li>
            </ul>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE3D3] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">{{ $t('terms.sections.twelve.tag') }}</div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.twelve.title') }}</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li v-for="(item, index) in $tm('terms.sections.twelve.list')" :key="index" class="list-disc ml-5">{{ $rt(item) }}</li>
            </ul>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE8DB] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">{{ $t('terms.sections.thirteen.tag') }}</div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('terms.sections.thirteen.title') }}</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li v-for="(item, index) in $tm('terms.sections.thirteen.list')" :key="index" class="list-disc ml-5">
                {{ $rt(item, {email: 'moneykoi.app@gmail.com'}) }}
              </li>
            </ul>
          </div>
        </div>

        <div class="rounded-3xl border border-dashed border-orange-200 bg-white/60 p-6 text-center shadow-sm shadow-orange-50/50">
          <p class="text-sm text-slate-600">{{ $t('terms.footer.alphaNote') }}</p>
          <p class="mt-2 text-xs text-slate-500">{{ $t('terms.footer.status', {date: '12.11.2025'}) }}</p>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
const {t} = useI18n()

useSeoMeta({
  title: () => t('terms.meta.title'),
  description: () => t('terms.meta.description')
})
</script>