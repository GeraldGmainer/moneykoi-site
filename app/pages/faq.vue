<template>
  <main class="relative bg-[#FFFDF8] text-slate-900 overflow-x-clip min-h-screen">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="mx-auto h-[35vh] max-w-6xl blur-2xl">
        <div
          class="mx-6 mt-10 h-full rounded-[40px] bg-[radial-gradient(1200px_500px_at_50%_-20%,#FFE6D7_0%,transparent_60%)]">
        </div>
      </div>
    </div>

    <PageHeader :blob="true" :border="true" :eyebrow="$t('faq.header.eyebrow')" :subtitle="$t('faq.header.subtitle')"
      :title="$t('faq.header.title')" align="left" />

    <section class="relative border-b border-orange-50 bg-gradient-to-b from-[#FFFDF8] to-[#FFF6EB]">
      <div
        class="absolute inset-x-0 -top-10 -z-10 h-72 bg-[radial-gradient(900px_220px_at_50%_0%,#FFECDC_0%,transparent_70%)]">
      </div>

      <div class="mx-auto max-w-4xl px-4 py-12 lg:py-20 sm:px-6 lg:px-8">

        <div class="space-y-12">
          <div v-for="(sectionKey, index) in faqSections" :key="sectionKey"
            :style="{ transitionDelay: `${index * 100}ms` }"
            class="opacity-0 translate-y-6 transition-all duration-700 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
            data-reveal>
            <h2 class="text-xl lg:text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-100 text-[#FF6F3D] text-sm">
                {{ index + 1 }}
              </span>
              {{ $t(`faq.sections.${sectionKey}.title`) }}
            </h2>

            <div class="space-y-4">
              <details v-for="(item, qIndex) in getQuestionsCount(sectionKey)" :key="qIndex"
                class="group rounded-3xl border border-orange-100 bg-white/80 shadow-sm shadow-orange-50/50 transition-all duration-300 open:shadow-md open:bg-white overflow-hidden">
                <summary
                  class="flex cursor-pointer list-none items-center justify-between p-6 text-slate-900 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 rounded-3xl select-none">
                  <span class="pr-4 text-lg">{{ $t(`faq.sections.${sectionKey}.questions[${qIndex}].q`) }}</span>

                  <span
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#FF6F3D] transition-transform duration-300 group-open:rotate-180 group-open:bg-[#FFE4D5]">
                    <Icon class="h-4 w-4" name="ph:caret-down-bold" />
                  </span>
                </summary>

                <div class="px-6 pb-6 text-slate-600 leading-relaxed text-base">
                  <div class="h-px w-full bg-orange-50 mb-4"></div>
                  {{ $t(`faq.sections.${sectionKey}.questions[${qIndex}].a`) }}
                </div>
              </details>
            </div>
          </div>
        </div>

        <div
          class="mt-20 text-center opacity-0 translate-y-6 transition-all duration-700 delay-300 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
          data-reveal>
          <div class="inline-flex flex-col items-center rounded-3xl border border-orange-100 bg-white/60 p-8 shadow-sm">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFE8DB] text-[#FF6F3D]">
              <Icon class="h-7 w-7" name="ph:envelope-simple-bold" />
            </div>
            <h3 class="text-xl font-semibold text-slate-900">Still have questions?</h3>
            <p class="mt-2 text-slate-600 mb-6 max-w-sm">If you couldn't find the answer you were looking for, feel free
              to reach out directly.</p>
            <NuxtLink :to="localePath('/contact')"
              class="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900">
              {{ $t('header.contact') }}
            </NuxtLink>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHeader from "../components/PageHeader.vue";

const { t, tm } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('faq.meta.title'),
  description: () => t('faq.meta.description')
})

const faqSections = ['troubleshooting', 'accounts', 'categories', 'sync']

const getQuestionsCount = (sectionKey) => {
  const questionsArray = tm(`faq.sections.${sectionKey}.questions`)
  return questionsArray ? questionsArray.length : 0
}

const observe = () => {
  const els = document.querySelectorAll('[data-reveal]')
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.setAttribute('data-inview', 'true')
        io.unobserve(e.target)
      }
    }
  }, { threshold: 0.15 }) // Slightly lower threshold for taller accordion containers
  els.forEach(el => io.observe(el))
}

onMounted(() => observe())
</script>

<style scoped>
details>summary::-webkit-details-marker {
  display: none;
}

details>summary {
  list-style: none;
}
</style>