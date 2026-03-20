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
        :eyebrow="$t('roadmap.header.eyebrow')"
        :subtitle="$t('roadmap.header.subtitle')"
        :title="$t('roadmap.header.title')"
        align="left"
    />

    <section class="relative border-b border-orange-50 bg-gradient-to-b from-[#FFFDF8] to-[#FFF6EB]">
      <div class="mx-auto max-w-6xl px-4 py-4 lg:py-16 sm:px-6 lg:px-8">
        <h2 class="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{{ $t('roadmap.phase1.title') }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-600 lg:text-base">{{ $t('roadmap.phase1.desc') }}</p>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-3 inline-flex items-center rounded-full bg-[#FFE4D5] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">
              {{ $t('roadmap.topPriority') }}
            </div>
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:wifi-off"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase1.items.offline.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase1.items.offline.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-3 inline-flex items-center rounded-full bg-[#FFE4D5] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">
              {{ $t('roadmap.topPriority') }}
            </div>
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:users"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase1.items.family.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase1.items.family.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:target"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase1.items.goals.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase1.items.goals.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:refresh-ccw"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase1.items.recurring.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase1.items.recurring.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:calendar-check-2"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase1.items.closing.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase1.items.closing.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:arrow-left-right"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase1.items.transfers.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase1.items.transfers.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:filter"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase1.items.filters.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase1.items.filters.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:sun"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase1.items.theme.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase1.items.theme.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-orange-50 bg-[#FFF6EB]">
      <div class="mx-auto max-w-6xl px-4 py-4 lg:py-16 sm:px-6 lg:px-8">
        <h2 class="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{{ $t('roadmap.phase2.title') }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-600 lg:text-base">{{ $t('roadmap.phase2.desc') }}</p>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:globe"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase2.items.web.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase2.items.web.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:image-down"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase2.items.photos.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase2.items.photos.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:scan"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase2.items.scan.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase2.items.scan.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:list-plus"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase2.items.bulk.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase2.items.bulk.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="ph:android-logo"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase2.items.widgets.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase2.items.widgets.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:line-chart"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase2.items.charts.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase2.items.charts.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-b from-[#FFF6EB] to-[#FFF1E0]">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 lg:py-16">
        <h2 class="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{{ $t('roadmap.phase3.title') }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-600 lg:text-base">{{ $t('roadmap.phase3.desc') }}</p>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:trending-up"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase3.items.forecasts.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase3.items.forecasts.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:message-square-plus"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase3.items.prompt.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase3.items.prompt.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:mic"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase3.items.voice.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase3.items.voice.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:trophy"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase3.items.gamification.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase3.items.gamification.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:sparkles"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase3.items.aiStrategies.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase3.items.aiStrategies.desc') }}</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:file-text"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">{{ $t('roadmap.phase3.items.aiReports.title') }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ $t('roadmap.phase3.items.aiReports.desc') }}</p>
          </div>
        </div>

        <div
            class="mt-12 rounded-3xl border border-orange-100 bg-white/80 p-6 text-center shadow-sm shadow-orange-50/70">
          <p class="text-sm leading-relaxed text-slate-600 lg:text-base">{{ $t('roadmap.footer.feedback') }} <span
              class="font-medium text-slate-900">{{ $t('roadmap.footer.callToAction') }}</span></p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const {t} = useI18n()

useSeoMeta({
  title: () => t('roadmap.meta.title'),
  description: () => t('roadmap.meta.description')
})
</script>