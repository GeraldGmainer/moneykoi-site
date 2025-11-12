<template>
  <main class="bg-[#FFFDF8] text-slate-900">
    <PageHeader
        eyebrow="Rechtliches"
        title="Impressum"
        subtitle="Angaben gemäß § 5 ECG und § 24 MedienG (Österreich)."
        :blob="true"
        :border="true"
        align="left"
    />

    <section class="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="rounded-3xl border border-orange-100 bg-white/95 shadow-sm shadow-orange-50/70 p-12">
        <div class="mt-8">
          <div>
            <h2 class="text-lg font-semibold">Diensteanbieter</h2>
            <p class="mt-2">
              Gerald Gmainer<br>
              Money Koi
            </p>
          </div>

          <div class="pt-6">
            <h2 class="text-lg font-semibold">Anschrift</h2>
            <p class="mt-2">Am Platzl 3<br>4451 Garsten<br>Österreich</p>
          </div>

          <div class="pt-6">
            <h2 class="text-lg font-semibold">Kontakt</h2>
            <p class="mt-2">
              E-Mail: <a href="mailto:moneykoi.app@gmail.com" class="underline decoration-slate-300 hover:decoration-slate-700">moneykoi.app@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  title: 'Impressum',
  description: 'Impressum gemäß § 5 ECG.'
})
useHead({ title: 'Impressum' })
</script>
