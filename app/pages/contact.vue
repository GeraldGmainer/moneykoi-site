<template>
  <main class="relative bg-gradient-to-b from-[#FFFDF8] to-[#FFF6EB] text-slate-900">
    <PageHeader
        :blob="true"
        :border="true"
        align="left"
        eyebrow="Kontakt"
        subtitle="Kurze Wege, klare Antworten. Schreib mir einfach eine E-Mail."
        title="Meld dich gern"
    />

    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="mx-auto h-[28vh] max-w-6xl blur-2xl">
        <div class="mx-6 mt-10 h-full rounded-[40px] bg-[radial-gradient(1200px_480px_at_50%_-20%,#FFE6D7_0%,transparent_60%)]"></div>
      </div>
    </div>

    <section class="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 mt-8">
      <div class="mx-auto w-full max-w-xl rounded-3xl border border-orange-100 bg-white/90 p-8 sm:p-10 text-center shadow-sm shadow-orange-50/70">
        <div class="mx-auto aspect-square h-36 w-36 overflow-hidden rounded-full ring-4 ring-white sm:h-40 sm:w-40">
          <img alt="Profilfoto" class="h-full w-full object-cover" src="/images/profile.png"/>
        </div>

        <h2 class="mt-6 text-2xl font-semibold tracking-tight text-slate-900">Gerald Gmainer</h2>

        <div class="mt-8">
          <a
              :href="`mailto:${email}`"
              class="inline-flex items-center justify-center rounded-full bg-[#FF6F3D] px-6 py-3 text-base font-semibold text-white shadow-sm shadow-orange-200/70 transition hover:-translate-y-0.5 hover:bg-[#ff7f52] active:translate-y-px"
          >
            <Icon class="mr-2.5 h-5 w-5" name="lucide:mail"/>
            <span class="px-1">{{ email }}</span>
          </a>
        </div>

        <div class="mt-8">
          <a
              :href="portfolioUrl"
              class="inline-flex items-center justify-center rounded-full border border-orange-200 bg-white px-6 py-3 text-base font-semibold text-slate-800 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 active:translate-y-px"
              rel="noopener"
              target="_blank"
          >
            <Icon class="mr-2.5 h-5 w-5" name="lucide:globe"/>
            <span class="px-1">Portfolio ansehen</span>
          </a>
        </div>

        <p class="mt-5 text-xs text-slate-500">Ich melde mich schnellstmöglich</p>
      </div>
    </section>
  </main>
</template>

<script setup>
const email = 'moneykoi.app@gmail.com'
const portfolioUrl = 'https://your-portfolio.example'
definePageMeta({
  title: 'Kontakt',
  description: 'Kontakt zu Money Koi: E-Mail und Portfolio.'
})
useHead({title: 'Kontakt'})
</script>
