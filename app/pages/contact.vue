<template>
  <main class="min-h-screen bg-gradient-to-b from-[#FFFDF8] to-[#FFF6EB] text-slate-900">
    <section class="border-b border-orange-50">
      <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-slate-500">Kontakt</p>
          <h1 class="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">Meld dich
            gern</h1>
          <p class="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 lg:text-base">Kurze Wege, klare
            Antworten. Schreib mir einfach eine E-Mail.</p>
        </div>
      </div>
    </section>

    <div class="mx-auto flex max-w-6xl items-center px-4 py-5 sm:px-6 lg:px-8">
      <div
          class="py-8 mx-auto w-full max-w-xl rounded-3xl border border-orange-100 bg-white/90 p-10 text-center shadow-sm shadow-orange-50/70">
        <div
            class="mx-auto aspect-square h-40 w-40 overflow-hidden rounded-full sm:h-36 sm:w-36 md:h-40 md:w-40">
          <img alt="Profilfoto" class="h-full w-full object-cover" src="/images/profile.png"/></div>

        <h2 class="mt-6 text-2xl font-semibold tracking-tight text-slate-900">Gerald Gmainer</h2>

        <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
              class="inline-flex items-center justify-center rounded-full bg-[#FF6F3D] px-6 py-3 text-base font-semibold text-white shadow-sm shadow-orange-200/70 transition hover:bg-[#ff7f52] active:translate-y-px"
              href="mailto:you@example.com"
          >
            <Icon class="mr-2.5 h-5 w-5" name="lucide:mail"/>
            <span class="px-1">moneykoi.app@gmail.com</span>
          </a>
        </div>

        <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
              class="inline-flex items-center justify-center rounded-full border border-orange-200 bg-white px-6 py-3 text-base font-semibold text-slate-800 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 active:translate-y-px"
              href="https://your-portfolio.example"
              rel="noopener"
              target="_blank"
          >
            <Icon class="mr-2.5 h-5 w-5" name="lucide:globe"/>
            <span class="px-1">Portfolio ansehen</span>
          </a>
        </div>

        <p class="mt-5 text-xs text-slate-500">Ich antworte in der Regel zeitnah.</p>
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  title: 'MoneyKoi – Kontakt',
  description: 'Kontakt zu MoneyKoi: Name, E-Mail und Portfolio.'
})
</script>
