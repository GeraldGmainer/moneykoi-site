<template>
  <main class="relative bg-[#FFFDF8] text-slate-900 overflow-x-clip">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="mx-auto h-[35vh] max-w-6xl blur-2xl">
        <div class="mx-6 mt-10 h-full rounded-[40px] bg-[radial-gradient(1200px_500px_at_50%_-20%,#FFE6D7_0%,transparent_60%)]"></div>
      </div>
    </div>

    <PageHeader
        eyebrow="Roadmap"
        title="Money Koi entwickelt"
        subtitle="Die wichtigsten Schritte zuerst. Reihenfolge kann sich ändern – Qualität vor Geschwindigkeit."
        :blob="true"
        :border="true"
        align="left"
    />

    <section class="relative border-b border-orange-50 bg-gradient-to-b from-[#FFFDF8] to-[#FFF6EB]">
      <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 class="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">Phase 1 · Fokus & Basis</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-600 lg:text-base">Essentials für Familiennutzung und
          eindeutige Ziele.</p>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div
                class="mb-3 inline-flex items-center rounded-full bg-[#FFE4D5] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">
              Top Priorität
            </div>
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:wifi-off"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Offline-only Modus</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Voll nutzbar ohne Account und ohne Serververbindung.
              Daten bleiben ausschließlich auf dem Gerät.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div
                class="mb-3 inline-flex items-center rounded-full bg-[#FFE4D5] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">
              Top Priorität
            </div>
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:users"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Familienkonto & Mitglieder</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Gemeinsame Budgets, Rollen und Berechtigungen für
              Partner und Familie.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:target"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Budgetziele & Tracking</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Ziele pro Kategorie und Monat, Fortschritt in
              Echtzeit.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:refresh-ccw"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Wiederkehrende Buchungen</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Abos, Miete, Gehalt – automatisch geplant und
              übersichtlich gelistet.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:calendar-check-2"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Monatsabschluss</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Monat abschließen, Überträge setzen, kurze
              Zusammenfassung sichern.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:arrow-left-right"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Überträge zwischen Konten</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Einfache Transfers mit Gegenbuchung und klarer
              Historie.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:filter"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Erweiterte Filter</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Filtern nach Zeitraum, Konto, Kategorie, Betrag, Text
              und Kombinationen.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:sun"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Light Theme</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Helles Design als Alternative zur dunklen
              Standard-Optik.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-orange-50 bg-[#FFF6EB]">
      <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 class="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">Phase 2 · Komfort & Effizienz</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-600 lg:text-base">Schneller erfassen, besser auswerten,
          bequemer arbeiten.</p>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:globe"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Web-Verwaltung</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Budgetbuch im Browser managen, ideal für
              Tastatur-Poweruser.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:image-down"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Fotos speichern</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Belege direkt an Buchungen hängen und
              wiederfinden.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:scan"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Beleg-Scan & Erkennung</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Text und Betrag aus Belegen auslesen und
              vorbefüllen.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:list-plus"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Massen-Erfassung</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Mehrere Positionen eines Belegs schnell
              hintereinander speichern.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="ph:android-logo"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Android Widgets</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Schnellzugriff für Erfassen, Übersicht und Ziele auf
              dem Homescreen.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:line-chart"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Mehr Analysen & Diagramme</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Trends, Verläufe, Kategorien im Zeitvergleich – ruhig
              aufbereitet.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-b from-[#FFF6EB] to-[#FFF1E0]">
      <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 class="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">Phase 3 · Vorausblick & Extras</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-600 lg:text-base">Intelligenz und Motivation – später, wenn
          die Basis sitzt.</p>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:trending-up"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Prognosen</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Voraussichtlicher Monatsverlauf und Restbudget je
              Kategorie.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:message-square-plus"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Schnell-Erfassung mit Ein-Prompt</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Eine Eingabe, komplett vorgefüllte Buchung. Optional
              per Sprache.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:mic"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Sprachaufnahme</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Buchungen diktieren, unterwegs schnell erfasst.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:trophy"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">Gamification</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Ranglisten, Quests, Ziele und Auszeichnungen –
              optional, dezent.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:sparkles"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">KI-Sparstrategien</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Vorschläge passend zu deinem Muster, respektvoll und
              transparent.</p>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-1 flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4D5] text-[#FF6F3D]">
                <Icon class="h-5 w-5" name="lucide:file-text"/>
              </div>
              <h3 class="text-lg font-semibold text-slate-900">KI-Berichte & Empfehlungen</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Monatsberichte in Klartext mit sanften, umsetzbaren
              Hinweisen.</p>
          </div>
        </div>

        <div
            class="mt-12 rounded-3xl border border-orange-100 bg-white/80 p-6 text-center shadow-sm shadow-orange-50/70">
          <p class="text-sm leading-relaxed text-slate-600 lg:text-base">Feedback oder Wunsch? <span
              class="font-medium text-slate-900">Sag Bescheid – die Roadmap bleibt lebendig.</span></p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  title: 'Roadmap',
  description: 'Die geplanten Funktionen von Money Koi: Prioritäten, Phasen und Ausblick.'
})
useHead({ title: 'Roadmap' })
</script>

