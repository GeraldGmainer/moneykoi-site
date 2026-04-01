<template>
  <main class="relative bg-[#FFFDF8] text-slate-900">
    <PageHeader
        :blob="true"
        :border="true"
        :eyebrow="$t('privacy.header.eyebrow')"
        :subtitle="$t('privacy.header.subtitle')"
        :title="$t('privacy.header.title')"
        align="left"
    />

    <section class="bg-gradient-to-b from-[#FFFDF8] to-[#FFF6EB] border-b border-orange-50">
      <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="space-y-10">
          <div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('privacy.sections.one.title') }}</h2>
            <p class="mt-2 text-slate-700">
              {{ $t('privacy.sections.one.responsible') }}
              {{ $t('privacy.sections.one.email') }} <a class="underline decoration-orange-300 underline-offset-2 hover:text-slate-900" href="mailto:moneykoi.app@gmail.com">moneykoi.app@gmail.com</a>
            </p>
            <p class="mt-2 text-slate-700">
              {{ $t('privacy.sections.one.scope', {app: 'Money Koi'}) }}
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('privacy.sections.two.title') }}</h2>
            <div class="mt-3">
              <div class="rounded-3xl p-3">
                <h3 class="font-semibold text-slate-900">{{ $t('privacy.sections.two.auth.title') }}</h3>
                <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                  <li v-for="(item, index) in $tm('privacy.sections.two.auth.list')" :key="index">
                    {{ $rt(item) }}
                  </li>
                </ul>
              </div>
              <div class="rounded-3xl p-3">
                <h3 class="font-semibold text-slate-900">{{ $t('privacy.sections.two.content.title') }}</h3>
                <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                  <li v-for="(item, index) in $tm('privacy.sections.two.content.list')" :key="index">
                    {{ $rt(item) }}
                  </li>
                </ul>
              </div>
              <div class="rounded-3xl p-3">
                <h3 class="font-semibold text-slate-900">{{ $t('privacy.sections.two.tech.title') }}</h3>
                <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                  <li v-for="(item, index) in $tm('privacy.sections.two.tech.list')" :key="index">
                    {{ $rt(item) }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('privacy.sections.three.title') }}</h2>
            <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li v-for="(item, index) in $tm('privacy.sections.three.list')" :key="index">
                {{ $rt(item) }}
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('privacy.sections.four.title') }}</h2>
            <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li v-for="(item, index) in $tm('privacy.sections.four.list')" :key="index">
                {{ $rt(item) }}
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('privacy.sections.five.title') }}</h2>
            <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li v-for="(item, index) in $tm('privacy.sections.five.list')" :key="index">
                {{ $rt(item) }}
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('privacy.sections.six.title') }}</h2>
            <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li v-for="(item, index) in $tm('privacy.sections.six.list')" :key="index">
                {{ $rt(item) }}
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('privacy.sections.seven.title') }}</h2>
            <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li v-for="(item, index) in $tm('privacy.sections.seven.list')" :key="index">
                {{ $rt(item) }}
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('privacy.sections.eight.title') }}</h2>
            <p class="mt-2 text-slate-700">
              {{ $t('privacy.sections.eight.text') }}
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('privacy.sections.nine.title') }}</h2>
            <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li v-for="(item, index) in $tm('privacy.sections.nine.list')" :key="index">
                {{ $rt(item, {email: 'moneykoi.app@gmail.com'}) }}
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">{{ $t('privacy.sections.ten.title') }}</h2>
            <p class="mt-2 text-slate-700">
              {{ $t('privacy.sections.ten.text', {date: '01.04.2026'}) }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const {t} = useI18n()

definePageMeta({
  title: 'Datenschutz',
  description: 'Datenschutzerklärung für Money Koi: Verantwortlicher, Datenarten, Zwecke, Auftragsverarbeiter, Speicherorte, Löschung, Rechte und Kontakt.'
})

useSeoMeta({
  title: () => t('privacy.meta.title'),
  description: () => t('privacy.meta.description')
})
</script>