<template>
  <main class="relative bg-[#FFFDF8] text-slate-900 overflow-x-clip">
    <PageHeader
        eyebrow="Rechtliches"
        title="Nutzungsbedingungen"
        subtitle="Grundlagen der Nutzung von Money Koi – Geltungsbereich, Konten, Regeln, Haftung und Änderungen."
        :blob="true"
        :border="true"
        align="left"
    />

    <section class="relative border-b border-orange-50 bg-gradient-to-b from-[#FFFDF8] to-[#FFF6EB]">
      <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">

        <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
          <h2 class="text-xl font-semibold text-slate-900">1. Anbieter, Geltungsbereich</h2>
          <p class="mt-3 text-slate-700 text-sm lg:text-base">
            Vertragspartner und Betreiber der App <span class="font-medium">Money Koi</span> ist <span class="font-medium">Gerald Gmainer</span>, Am Platzl 3 / 3, 4451 Garsten, Österreich.
            Diese Bedingungen regeln die Nutzung der mobilen App. Eine Web-Version mit gleichartigen Funktionen ist geplant und wird bei Start von diesen Bedingungen erfasst.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE4D5] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">Konten</div>
            <h2 class="text-xl font-semibold text-slate-900">2. Konto & Anmeldung</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li>Login per E-Mail-OTP und Google OAuth.</li>
              <li>Ein Account kann auf mehreren Geräten genutzt werden.</li>
              <li>Aktuell ist gemeinsame Nutzung innerhalb einer Familie über einen Account möglich; perspektivisch werden getrennte Familien-Accounts innerhalb eines gemeinsamen Tenants unterstützt.</li>
              <li>Es gibt keine starre Altersgrenze; die App richtet sich faktisch an volljährige Nutzer:innen. Für Minderjährige ist die Nutzung nur mit Zustimmung der Erziehungsberechtigten zulässig.</li>
            </ul>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE8DB] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">Daten</div>
            <h2 class="text-xl font-semibold text-slate-900">3. Inhalte & Daten der Nutzer:innen</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li>Verarbeitete Daten: Login-Daten (E-Mail), Profil-Einstellungen, Konten, Kategorien, Transaktionen.</li>
              <li>Unzulässig sind rechtswidrige, irreführende oder schädliche Inhalte. Automatisiertes Massenerfassen, Scraping oder Sicherheitsumgehung ist verboten.</li>
              <li>Ein Datenexport ist derzeit nicht verfügbar und kann später ergänzt werden.</li>
            </ul>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE6DE] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">Betrieb</div>
            <h2 class="text-xl font-semibold text-slate-900">4. Leistung, Verfügbarkeit, Support</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li>Bereitstellung nach Best-Effort, ohne Zusage permanenter Verfügbarkeit oder Fehlerfreiheit.</li>
              <li>Es erfolgen regelmäßige Sicherungen; ein Anspruch auf vollständige Wiederherstellung besteht nicht.</li>
              <li>Support per E-Mail: <a href="mailto:moneykoi.app@gmail.com" class="underline decoration-[#FF6F3D]">moneykoi.app@gmail.com</a>. Antwort in der Regel innerhalb von drei Werktagen.</li>
              <li>Offline-First: Änderungen werden bei bestehender Verbindung automatisch im Hintergrund synchronisiert.</li>
            </ul>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE4D5] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">Preise</div>
            <h2 class="text-xl font-semibold text-slate-900">5. Preise, Zahlungen, Widerruf</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li>Der Dienst ist derzeit kostenlos und werbefrei.</li>
              <li>Ein Abo-Modell ist geplant (voraussichtlich €0,99/Monat) nach Abschluss der ersten Ausbauphase. Abwicklung ggf. über App-Stores.</li>
              <li>Bei Einführung kostenpflichtiger Leistungen werden Informationen zu Preisen, Laufzeiten, Kündigung und Widerrufsrechten vorab bereitgestellt.</li>
            </ul>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFEBDD] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">Drittanbieter</div>
            <h2 class="text-xl font-semibold text-slate-900">6. Drittanbieter & Übermittlungen</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li>Supabase als Infrastruktur/Backend (EU-Region).</li>
              <li>Website-Hosting und Analytics über Vercel.</li>
              <li>Sentry Standard-Telemetrie für Stabilität; in der App wird eine Opt-out-Möglichkeit angeboten.</li>
              <li>Geplanter E-Mail-Versanddienst für Login-Mails (z. B. Amazon-Service) kann später ergänzt werden.</li>
            </ul>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE3D3] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">IP</div>
            <h2 class="text-xl font-semibold text-slate-900">7. Geistiges Eigentum</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li>App, Inhalte, Designs und Marken verbleiben bei Gerald Gmainer.</li>
              <li>Eine Nutzung von Logos und Screenshots für Presse/Reviews ist in angemessenem Rahmen zulässig, sofern korrekt auf Money Koi verwiesen wird.</li>
            </ul>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE8DB] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">Regeln</div>
            <h2 class="text-xl font-semibold text-slate-900">8. Zulässige Nutzung</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li>Verboten sind rechtswidrige Inhalte, Belästigung, Missbrauch der Dienste, Umgehung technischer Schutzmaßnahmen, unautorisierte Automatisierung oder Weitergabe von Zugangsdaten.</li>
              <li>Kommerzieller Wiederverkauf oder Vermietung der Zugänge ist nicht gestattet.</li>
            </ul>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE6DE] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">Beendigung</div>
            <h2 class="text-xl font-semibold text-slate-900">9. Kündigung & Sperre</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li>Nutzer:innen können ihr Konto jederzeit kündigen. Daten werden in der Regel innerhalb von 30 Tagen gelöscht; Sicherungskopien können für begrenzte Zeit fortbestehen.</li>
              <li>Bei schweren Verstößen kann der Zugang fristlos gesperrt oder beendet werden.</li>
            </ul>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE4D5] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">Haftung</div>
            <h2 class="text-xl font-semibold text-slate-900">10. Haftung & Gewährleistung</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li>Es wird keine Garantie für unterbrechungsfreien oder fehlerfreien Betrieb übernommen.</li>
              <li>Die Haftung für Vorsatz, grobe Fahrlässigkeit sowie für Personenschäden bleibt unberührt. Im Übrigen ist die Haftung auf vorhersehbare, vertragstypische Schäden begrenzt.</li>
            </ul>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFEBDD] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">Änderungen</div>
            <h2 class="text-xl font-semibold text-slate-900">11. Änderungen der Bedingungen und des Dienstes</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li>Sachlich gerechtfertigte Anpassungen dieser Bedingungen oder des Dienstes können vorgenommen werden.</li>
              <li>Wesentliche Änderungen werden mindestens 14 Tage vor Inkrafttreten in der App oder per E-Mail angekündigt. Bei Widerspruch besteht das Recht zur fristlosen Kündigung des Kontos.</li>
              <li>Reine Klarstellungen, Fehlerbehebungen und vorteilhafte Änderungen gelten sofort.</li>
            </ul>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE3D3] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">Recht</div>
            <h2 class="text-xl font-semibold text-slate-900">12. Anwendbares Recht, Sprache</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li>Es gilt österreichisches Recht unter Wahrung zwingender Verbraucherschutzbestimmungen des Wohnsitzstaates.</li>
              <li>Vertragssprache ist Deutsch. Übersetzungen dienen der Verständlichkeit.</li>
            </ul>
          </div>

          <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
            <div class="mb-2 inline-flex items-center rounded-full bg-[#FFE8DB] px-2.5 py-1 text-xs font-medium text-[#FF6F3D]">Kontakt</div>
            <h2 class="text-xl font-semibold text-slate-900">13. Kontakt</h2>
            <ul class="mt-3 space-y-2 text-slate-700 text-sm lg:text-base">
              <li>Gerald Gmainer, Am Platzl 3 / 3, 4451 Garsten, Österreich</li>
              <li>E-Mail: <a href="mailto:moneykoi.app@gmail.com" class="underline decoration-[#FF6F3D]">moneykoi.app@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div class="rounded-3xl border border-dashed border-orange-200 bg-white/60 p-6 text-center shadow-sm shadow-orange-50/50">
          <p class="text-sm text-slate-600">Alpha/Beta-Hinweis: Money Koi befindet sich in einem frühen Entwicklungsstadium. Funktionen, Schnittstellen und Integrationen können sich ändern.</p>
          <p class="mt-2 text-xs text-slate-500">Stand: 12.11.2025</p>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  title: 'Nutzungsbedingungen',
  description: 'Nutzungsbedingungen für Money Koi: Konto, Daten, Verbote, Haftung, Änderungen und Kontakt.'
})
useHead({ title: 'Nutzungsbedingungen' })
</script>
