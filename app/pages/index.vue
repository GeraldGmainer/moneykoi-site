<template>
  <main class="min-h-screen bg-[#FFFDF8] text-slate-900 overflow-x-clip">
    <section class="relative border-b border-orange-50">
      <div class="pointer-events-none absolute inset-0 -z-10">
        <div class="mx-auto h-[40vh] max-w-6xl blur-2xl">
          <div
              class="mx-6 mt-10 h-full rounded-[40px] bg-[radial-gradient(1200px_500px_at_50%_-20%,#FFE6D7_0%,transparent_60%)]"></div>
        </div>
      </div>

      <div
          class="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-start lg:px-8"
      >
        <div class="flex-3 text-center lg:text-left">
          <p class="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 lg:pt-12 opacity-0 translate-y-4 will-change-transform transition-all duration-700 ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
             data-reveal>
            Ruhig. Klar. Einfach.
          </p>

          <h1
              class="mt-4 leading-24 text-2xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl opacity-0 translate-y-4 will-change-transform transition-all duration-700 delay-100 ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal
          >
            Dein Weg zu finanzieller
            <span
                class="relative inline-block bg-gradient-to-r from-[#FF6F3D] via-[#FF9A6C] to-[#FFD7B0] bg-clip-text text-transparent animate-shimmer"
            >
              Harmonie
            </span>
          </h1>

          <p
              class="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 lg:text-base opacity-0 translate-y-4 will-change-transform transition-all duration-700 delay-200 ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal
          >
            Plane smarter, gib bewusster aus und bleib im Gleichgewicht. Mach aus deinem Haushaltsbuch eine ruhige
            tägliche Routine.
          </p>

          <div
              class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start opacity-0 translate-y-4 will-change-transform transition-all duration-700 delay-300 ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal
          >
            <button
                class="inline-flex items-center justify-center rounded-full bg-[#FF6F3D] px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-orange-200/70 outline-none ring-0 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70 animate-cta"
                disabled
                type="button"
            >
              <Icon class="mr-2 h-4 w-4" name="simple-icons:googleplay"/>
              Google Play
              <span class="ml-2 text-xs opacity-80">(coming soon)</span>
            </button>

            <button
                aria-label="iOS App (coming soon)"
                class="inline-flex items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-slate-300/60 outline-none ring-0 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-px disabled:opacity-70"
                disabled
                type="button"
            >
              <Icon class="mr-2 h-4 w-4" name="simple-icons:appstore"/>
              App Store
              <span class="ml-2 text-xs opacity-80">(coming soon)</span>
            </button>
          </div>
        </div>

        <div class="flex-2">
          <div
              class="mx-auto flex w-full justify-center lg:justify-end max-w-[220px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[300px]"
          >
            <div
                class="relative will-change-transform"
                data-tilt
            >
              <img
                  alt="MoneyKoi App-Screenshot"
                  class="block h-auto w-full rounded-[22px] shadow-[0_10px_30px_rgba(255,111,61,0.18)] animate-float"
                  decoding="async"
                  loading="eager"
                  src="/images/screen1.png"
                  width="900"
              />
              <span
                  class="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/40 mix-blend-luminosity"></span>
            </div>
          </div>
        </div>
      </div>

      <div
          class="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-[#FFFDF8]"></div>
    </section>

    <section>
      <div class="text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400 opacity-0 translate-y-4 transition-all duration-700 ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
           data-reveal>
          Für dich gestaltet
        </p>
        <div class="mt-3 flex flex-col items-center">
          <h2 class="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl opacity-0 translate-y-4 transition-all duration-700 delay-100 ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal>
            Klarheit über dein Geld
          </h2>
          <div class="mt-4 h-[3px] w-14 rounded-full bg-[#FF6F3D] animate-grow"></div>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid gap-6 md:grid-cols-3">
          <div class="group rounded-3xl border border-orange-100 bg-white/80 p-6 text-center shadow-sm shadow-orange-50/80 transition hover:-translate-y-1 hover:shadow-lg">
            <div class="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
              <span class="text-lg">⚡️</span>
            </div>
            <h3 class="text-base font-semibold text-slate-900">Sofort & Offline</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Ohne Wartezeiten, auch ohne Verbindung. Immer bereit für den nächsten Eintrag.</p>
          </div>

          <div class="group rounded-3xl border border-orange-100 bg-white/80 p-6 text-center shadow-sm shadow-orange-50/80 transition hover:-translate-y-1 hover:shadow-lg">
            <div class="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE8DB] text-[#FF6F3D]">
              <span class="text-lg">🎯</span>
            </div>
            <h3 class="text-base font-semibold text-slate-900">Klarer Fokus</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Nur die Kennzahlen, die wirklich zählen. Kein Ballast, kein Stress.</p>
          </div>

          <div class="group rounded-3xl border border-orange-100 bg-white/80 p-6 text-center shadow-sm shadow-orange-50/80 transition hover:-translate-y-1 hover:shadow-lg">
            <div class="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFEBDD] text-[#FF6F3D]">
              <span class="text-lg">🌿</span>
            </div>
            <h3 class="text-base font-semibold text-slate-900">Ruhiges Design</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Wärme, Balance, Lesbarkeit. Gestaltung, die dich runterbringt.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400" data-reveal>
          Schön & funktional
        </p>
        <h2 class="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl" data-reveal>
          Platz für das Wesentliche
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600" data-reveal>
          Jede Ansicht ist so gestaltet, dass du ruhig und fokussiert bleibst: klare Hierarchien, gute Lesbarkeit
          und keine Ablenkungen. So triffst du Entscheidungen mit einem Blick.
        </p>
      </div>
    </section>

    <section id="warum" class="relative border-b border-orange-50 bg-gradient-to-b from-[#FFFDF8] to-[#FFF6EB]">
      <div class="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(900px_220px_at_50%_0%,#FFECDC_0%,transparent_70%)]"></div>
      <div class="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:px-8">
        <div class="order-1 flex justify-center lg:justify-end">
          <div
              class="relative opacity-0 translate-y-4 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
              data-reveal>
            <video
                autoplay
                class="block max-h-[720px] rounded-4xl shadow-2xl "
                loop
                muted
                playsinline
                src="/videos/moneykoi_demo.mp4"
            ></video>
            <div class="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-white/30"></div>
          </div>
        </div>

        <div class="order-2 opacity-0 translate-y-4 transition-all duration-700 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0" data-reveal>
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">Warum ein Haushaltsbuch</p>
          <h2 class="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">Klarheit statt Bauchgefühl</h2>
          <p class="mt-3 text-base leading-7 lg:text-lg lg:leading-8 text-slate-600 max-w-prose">
            Wenn alles an einem ruhigen Ort steht, werden Muster sichtbar: Wo Geld hinfließt, was wichtig ist und wo Luft bleibt. Das senkt Stress und macht bessere Entscheidungen leicht.
          </p>
          <ul class="mt-5 list-disc gap-5 pl-8 text-sm text-slate-700">
            <li class="my-4">Monat verstehen statt raten</li>
            <li class="my-4">Prioritäten schärfen</li>
            <li class="my-4">Ziele gelassen erreichen</li>
          </ul>
          <p class="mt-6 text-base lg:text-lg leading-7 lg:leading-8 text-slate-600 max-w-prose">
            MoneyKoi ist die einfache, moderne Variante des Papier-Haushaltsbuchs.
          </p>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="text-center">
        <p class="text-m font-semibold uppercase tracking-[0.25em] text-orange-400">bereit?</p>
        <p class="mt-6 text-sm leading-relaxed text-slate-600">
          Wenn du sehen willst, wie sich das im Alltag anfühlt, wirf einen Blick auf die wichtigsten Funktionen.
        </p>
        <div class="my-6">
          <NuxtLink
              class="inline-flex items-center justify-center rounded-full bg-[#FF6F3D] px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-orange-200/70 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-px"
              to="/features"
          >
            Funktionen ansehen
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  title: 'Money Koi – Ruhiges, Offline-Haushaltsbuch.',
  description: 'Money Koi ist ein ruhiges, offline-first Haushaltsbuch. Weniger Lärm, mehr Balance.'
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

const tilt = () => {
  const card = document.querySelector('[data-tilt]')
  if (!card) return
  const max = 10
  let raf = null
  const onMove = e => {
    const r = card.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    const rx = (-py * max).toFixed(2)
    const ry = (px * max).toFixed(2)
    if (raf) cancelAnimationFrame(raf)
    raf = requestAnimationFrame(() => {
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`
    })
  }
  const reset = () => {
    if (raf) cancelAnimationFrame(raf)
    card.style.transform = ''
  }
  card.addEventListener('mousemove', onMove)
  card.addEventListener('mouseleave', reset)
}

onMounted(() => {
  observe()
  tilt()
})
</script>

<style scoped>
@keyframes shimmer {
  0% {
    background-position: 0% 50%
  }
  100% {
    background-position: 200% 50%
  }
}

@keyframes float {
  0% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(-8px)
  }
  100% {
    transform: translateY(0)
  }
}

.animate-shimmer {
  background-size: 200% 100%;
  animation: shimmer 3.5s ease-in-out infinite
}

.animate-float {
  animation: float 6s ease-in-out infinite
}
</style>
