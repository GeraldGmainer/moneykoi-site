<template>
  <main class="relative bg-[#FFFDF8] text-slate-900 overflow-x-clip">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="mx-auto h-[35vh] max-w-6xl blur-2xl">
        <div class="mx-6 mt-10 h-full rounded-[40px] bg-[radial-gradient(1200px_500px_at_50%_-20%,#FFE6D7_0%,transparent_60%)]"></div>
      </div>
    </div>

    <PageHeader
        :blob="true"
        :border="true"
        :eyebrow="$t('features.header.eyebrow')"
        :subtitle="$t('features.header.subtitle')"
        :title="$t('features.header.title')"
        align="left"
    />

    <section class="relative border-b border-orange-50 bg-gradient-to-b from-[#FFFDF8] to-[#FFF6EB]">
      <div class="absolute inset-x-0 -top-10 -z-10 h-72 bg-[radial-gradient(900px_220px_at_50%_0%,#FFECDC_0%,transparent_70%)]"></div>
      <div class="mx-auto max-w-6xl px-4 py-4 lg:py-16 sm:px-6 lg:px-8">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
              class="feature-card group rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/80 opacity-0 translate-y-6 transition-all duration-700 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal>
            <div class="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D] group-hover:scale-105 transition-transform">
              <Icon class="h-5 w-5" name="ph:cloud-arrow-up-bold"/>
            </div>
            <h3 class="text-lg font-semibold text-slate-900">{{ $t('features.cards.offline.title') }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('features.cards.offline.desc') }}</p>
          </div>

          <div
              class="feature-card group rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/80 opacity-0 translate-y-6 transition-all duration-700 delay-100 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal>
            <div class="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFE8DB] text-[#FF6F3D] group-hover:scale-105 transition-transform">
              <Icon class="h-5 w-5" name="ph:folders-bold"/>
            </div>
            <h3 class="text-lg font-semibold text-slate-900">{{ $t('features.cards.categories.title') }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('features.cards.categories.desc') }}</p>
          </div>

          <div
              class="feature-card group rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/80 opacity-0 translate-y-6 transition-all duration-700 delay-200 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal>
            <div class="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFEBDD] text-[#FF6F3D] group-hover:scale-105 transition-transform">
              <Icon class="h-5 w-5" name="ph:book-bold"/>
            </div>
            <h3 class="text-lg font-semibold text-slate-900">{{ $t('features.cards.transactions.title') }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('features.cards.transactions.desc') }}</p>
          </div>

          <div
              class="feature-card group rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/80 opacity-0 translate-y-6 transition-all duration-700 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal>
            <div class="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFE6DE] text-[#FF6F3D] group-hover:scale-105 transition-transform">
              <Icon class="h-5 w-5" name="ph:trend-up-bold"/>
            </div>
            <h3 class="text-lg font-semibold text-slate-900">{{ $t('features.cards.analytics.title') }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('features.cards.analytics.desc') }}</p>
          </div>

          <div
              class="feature-card group rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/80 opacity-0 translate-y-6 transition-all duration-700 delay-100 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal>
            <div class="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D] group-hover:scale-105 transition-transform">
              <Icon class="h-5 w-5" name="ph:chart-pie-slice-bold"/>
            </div>
            <h3 class="text-lg font-semibold text-slate-900">{{ $t('features.cards.month.title') }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('features.cards.month.desc') }}</p>
          </div>

          <div
              class="feature-card group rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/80 opacity-0 translate-y-6 transition-all duration-700 delay-200 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal>
            <div class="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFE8DB] text-[#FF6F3D] group-hover:scale-105 transition-transform">
              <Icon class="h-5 w-5" name="ph:magnifying-glass-bold"/>
            </div>
            <h3 class="text-lg font-semibold text-slate-900">{{ $t('features.cards.search.title') }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('features.cards.search.desc') }}</p>
          </div>

          <div
              class="feature-card group rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/80 opacity-0 translate-y-6 transition-all duration-700 delay-100 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal>
            <div class="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFEBDD] text-[#FF6F3D] group-hover:scale-105 transition-transform">
              <Icon class="h-5 w-5" name="ph:gear-six-bold"/>
            </div>
            <h3 class="text-lg font-semibold text-slate-900">{{ $t('features.cards.settings.title') }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('features.cards.settings.desc') }}</p>
          </div>

          <div
              class="feature-card group rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/80 opacity-0 translate-y-6 transition-all duration-700 delay-200 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal>
            <div class="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFE3D3] text-[#FF6F3D] group-hover:scale-105 transition-transform">
              <Icon class="h-5 w-5" name="ph:palette-bold"/>
            </div>
            <h3 class="text-lg font-semibold text-slate-900">{{ $t('features.cards.design.title') }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('features.cards.design.desc') }}</p>
          </div>
        </div>

        <div class="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <div class="order-2 lg:order-1 opacity-0 translate-y-4 transition-all duration-700 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0" data-reveal>
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">{{ $t('features.sections.analytics.eyebrow') }}</p>
            <h2 class="text-xl lg:text-2xl font-semibold text-slate-900">{{ $t('features.sections.analytics.title') }}</h2>
            <p class="mt-3 text-base lg:text-lg leading-7 lg:leading-8 text-slate-600 max-w-prose">{{ $t('features.sections.analytics.desc') }}</p>
            <ul class="mt-4 grid list-disc gap-2 pl-5 text-sm text-slate-700 sm:grid-cols-2">
              <li>{{ $t('features.sections.analytics.list.totalBalance') }}</li>
              <li>{{ $t('features.sections.analytics.list.cashflow') }}</li>
              <li>{{ $t('features.sections.analytics.list.topExpenses') }}</li>
              <li>{{ $t('features.sections.analytics.list.balanceHistory') }}</li>
              <li>{{ $t('features.sections.analytics.list.latestTransactions') }}</li>
              <li>{{ $t('features.sections.analytics.list.balanceTrend') }}</li>
              <li>{{ $t('features.sections.analytics.list.customPeriods') }}</li>
            </ul>
          </div>
          <div class="order-1 flex justify-center lg:order-2 lg:justify-center opacity-0 translate-y-4 transition-all duration-700 delay-150 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0" data-reveal>
            <img :alt="$t('features.sections.analytics.alt')" class="block max-h-[560px] w-auto rounded-2xl shadow-[0_12px_40px_rgba(17,17,17,0.08)] hover:scale-[1.06] transition-transform duration-500"
                 src="/images/screen1.png"/>
          </div>
        </div>

        <div class="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div class="flex justify-center lg:justify-center opacity-0 translate-y-4 transition-all duration-700 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0" data-reveal>
            <img :alt="$t('features.sections.categories.alt')" class="block max-h-[560px] w-auto rounded-2xl shadow-[0_12px_40px_rgba(17,17,17,0.08)] hover:scale-[1.06] transition-transform duration-500"
                 src="/images/screen4.png"/>
          </div>
          <div class="opacity-0 translate-y-4 transition-all duration-700 delay-150 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0" data-reveal>
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">{{ $t('features.sections.categories.eyebrow') }}</p>
            <h2 class="text-xl lg:text-2xl font-semibold text-slate-900">{{ $t('features.sections.categories.title') }}</h2>
            <p class="mt-3 text-base lg:text-lg leading-7 lg:leading-8 text-slate-600 max-w-prose">{{ $t('features.sections.categories.desc') }}</p>
          </div>
        </div>

        <div class="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <div class="order-2 lg:order-1 opacity-0 translate-y-4 transition-all duration-700 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0" data-reveal>
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">{{ $t('features.sections.transactions.eyebrow') }}</p>
            <h2 class="text-xl lg:text-2xl font-semibold text-slate-900">{{ $t('features.sections.transactions.title') }}</h2>
            <p class="mt-3 text-base lg:text-lg leading-7 lg:leading-8 text-slate-600 max-w-prose">{{ $t('features.sections.transactions.desc') }}</p>
          </div>
          <div class="order-1 flex justify-center lg:order-2 lg:justify-center opacity-0 translate-y-4 transition-all duration-700 delay-150 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0" data-reveal>
            <img :alt="$t('features.sections.transactions.alt')" class="block max-h-[560px] w-auto rounded-2xl shadow-[0_12px_40px_rgba(17,17,17,0.08)] hover:scale-[1.06] transition-transform duration-500"
                 src="/images/screen3.png"/>
          </div>
        </div>

        <div class="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div class="flex justify-center lg:justify-center opacity-0 translate-y-4 transition-all duration-700 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0" data-reveal>
            <img :alt="$t('features.sections.month.alt')" class="block max-h-[560px] w-auto rounded-2xl shadow-[0_12px_40px_rgba(17,17,17,0.08)] hover:scale-[1.06] transition-transform duration-500"
                 src="/images/screen2.png"/>
          </div>
          <div class="opacity-0 translate-y-4 transition-all duration-700 delay-150 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0" data-reveal>
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">{{ $t('features.sections.month.eyebrow') }}</p>
            <h2 class="text-xl lg:text-2xl font-semibold text-slate-900">{{ $t('features.sections.month.title') }}</h2>
            <p class="mt-3 text-base lg:text-lg leading-7 lg:leading-8 text-slate-600 max-w-prose">{{ $t('features.sections.month.desc') }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const {t} = useI18n()

useSeoMeta({
  title: () => t('features.meta.title'),
  description: () => t('features.meta.description')
})

const observe = () => {
  const els = document.querySelectorAll('[data-reveal]')
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.setAttribute('data-inview', 'true')
        io.unobserve(e.target)
      }
    }
  }, {threshold: 0.2})
  els.forEach(el => io.observe(el))
}
onMounted(() => observe())
</script>

<style scoped>
.feature-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 60px rgba(255, 111, 61, .16);
  transition: transform .25s ease, box-shadow .25s ease
}
</style>