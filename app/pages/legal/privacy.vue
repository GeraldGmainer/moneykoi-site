<template>
  <main class="relative bg-[#FFFDF8] text-slate-900">
    <PageHeader
        :blob="true"
        :border="true"
        align="left"
        eyebrow="Datenschutz"
        subtitle="Diese Datenschutzerklärung gilt für die Money Koi App und – sobald verfügbar – die Web-Version."
        title="Deine Daten. Klar und respektvoll."
    />

    <section class="bg-gradient-to-b from-[#FFFDF8] to-[#FFF6EB] border-b border-orange-50">
      <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="space-y-10">
          <div>
            <h2 class="text-xl font-semibold text-slate-900">1. Verantwortlicher & Geltungsbereich</h2>
            <p class="mt-2 text-slate-700">
              Verantwortlich: Gerald Gmainer, Am Platzl 3 / 3, 4451 Garsten, Österreich ·
              E-Mail: <a class="underline decoration-orange-300 underline-offset-2 hover:text-slate-900" href="mailto:moneykoi.app@gmail.com">moneykoi.app@gmail.com</a>
            </p>
            <p class="mt-2 text-slate-700">
              Geltung: Mobile App <span class="font-medium">Money Koi</span> und zukünftig die Web-Version mit gleichartigen Funktionen.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">2. Verarbeitete Datenarten</h2>
            <div class="mt-3 grid gap-6 lg:grid-cols-2">
              <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
                <h3 class="font-semibold text-slate-900">Authentifizierung & Profil</h3>
                <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                  <li>E-Mail beim OTP-Login; bei Google OAuth: Identifier (z. B. <span class="italic">sub</span>), E-Mail</li>
                  <li>Passwort-Hash (nur beim E-Mail-Login)</li>
                  <li>Metadaten: <span class="font-medium">tenant_id</span>, <span class="font-medium">profile_id</span>, <span class="font-medium">role</span></li>
                  <li>Profil: <span class="font-medium">display_name</span>, <span class="font-medium">avatar_url</span>, <span class="font-medium">settings</span> (z. B. Währung)</li>
                </ul>
              </div>
              <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
                <h3 class="font-semibold text-slate-900">Haushalts- & Inhaltsdaten</h3>
                <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                  <li>Haushalt (<span class="font-medium">tenant</span>): Name</li>
                  <li>Konten (<span class="font-medium">account</span>): Name, icon_name, icon_color</li>
                  <li>Kategorien (<span class="font-medium">category</span>): Name, category_type (income/outcome), parent_id, icon_*</li>
                  <li>Buchungen (<span class="font-medium">booking</span>): date, description, amount, Verknüpfungen zu Konto/Kategorie</li>
                </ul>
              </div>
              <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
                <h3 class="font-semibold text-slate-900">Technische & Sync-Daten</h3>
                <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                  <li>Zeitstempel: created_at, updated_at, deleted_at</li>
                  <li>Sync-Protokoll (<span class="font-medium">sync_log</span>): profile_id, table_name, row_id, changed_at</li>
                  <li>Server-Logs, App/OS-Version für Betrieb und Fehleranalyse</li>
                </ul>
              </div>
              <div class="rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-sm shadow-orange-50/70">
                <h3 class="font-semibold text-slate-900">Website (künftig)</h3>
                <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                  <li>Notwendige Cookies/Techniken für Betrieb</li>
                  <li>Analytics nur nach ausdrücklicher Einwilligung (Opt-in)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">3. Zwecke und Rechtsgrundlagen (Art. 6 DSGVO)</h2>
            <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li><span class="font-medium">Bereitstellung und Nutzung der App</span>, Kontoführung, Synchronisierung, Datenverwaltung
                (Art. 6 Abs. 1 lit. b – Vertrag/vertragsähnliches Verhältnis)
              </li>
              <li><span class="font-medium">Stabilität, Sicherheit, Fehleranalyse</span>, Missbrauchs- und Ausfallprävention
                (Art. 6 Abs. 1 lit. f – berechtigtes Interesse)
              </li>
              <li><span class="font-medium">Website-Analytics</span> ausschließlich mit Einwilligung (Art. 6 Abs. 1 lit. a); widerrufbar</li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">4. Empfänger & Auftragsverarbeiter</h2>
            <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li><span class="font-medium">Supabase</span> (Auth, Postgres, Storage; EU-Region, z. B. eu-central-1/Frankfurt)</li>
              <li><span class="font-medium">Sentry</span> für App/Web-Fehleranalyse; in-App Opt-out vorgesehen</li>
              <li><span class="font-medium">Vercel</span> für Website-Hosting/Analytics; Analytics nur nach Opt-in</li>
              <li><span class="font-medium">E-Mail-Versand</span> über Supabase SMTP; geplant: Amazon SES für OTP-Mails</li>
              <li>Datenübermittlungen in Drittländer nur bei Erfordernis und mit geeigneten Garantien (z. B. SCCs/DPF)</li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">5. Speicherorte & Löschung</h2>
            <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li>App: SQLite für Inhalte; Tokens in Flutter Secure Storage</li>
              <li>Server: Supabase in der EU</li>
              <li>Selbst-Löschung in der App möglich; Kontolöschung führt zur Entfernung der Serverdaten inkl. Backups i. d. R. innerhalb von <span class="font-medium">30 Tagen</span></li>
              <li>Logs/Telemetrie werden bis zu <span class="font-medium">90 Tagen</span> vorgehalten</li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">6. Cookies, lokale Speicherung & Einwilligungen</h2>
            <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li>App: keine Drittanbieter-Cookies; lokale Speicherung für Offline-Funktionen</li>
              <li>Website: nur notwendige Cookies standardmäßig; Analytics erst nach Opt-in (Consent-Banner)</li>
              <li>Einwilligungen können jederzeit mit Wirkung für die Zukunft widerrufen werden</li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">7. Sicherheit</h2>
            <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li>TLS-Verschlüsselung, rollenbasierte Zugriffe, Supabase RLS/Policies</li>
              <li>Datensparsame Voreinstellungen und regelmäßige Updates</li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">8. Minderjährige</h2>
            <p class="mt-2 text-slate-700">
              Der Dienst richtet sich nicht an Kinder unter 16 Jahren. Die Nutzung Minderjähriger erfolgt nur mit Zustimmung der Erziehungsberechtigten.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">9. Betroffenenrechte</h2>
            <ul class="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li>Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch</li>
              <li>Widerruf erteilter Einwilligungen jederzeit möglich</li>
              <li>Beschwerde bei der Österreichischen Datenschutzbehörde, Barichgasse 40–42, 1030 Wien,
                <a class="underline decoration-orange-300 underline-offset-2 hover:text-slate-900" href="mailto:dsb@dsb.gv.at">dsb@dsb.gv.at</a>
              </li>
              <li>Kontakt für Anfragen: <a class="underline decoration-orange-300 underline-offset-2 hover:text-slate-900" href="mailto:moneykoi.app@gmail.com">moneykoi.app@gmail.com</a> (Antwort i. d. R. innerhalb von 3
                Werktagen)
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900">10. Änderungen dieser Erklärung</h2>
            <p class="mt-2 text-slate-700">
              Wir passen diese Erklärung bei Bedarf an, etwa bei neuen Funktionen oder Rechtslagen. Stand: <span class="font-medium">12.11.2025</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  title: 'Datenschutz',
  description: 'Datenschutzerklärung für Money Koi: Verantwortlicher, Datenarten, Zwecke, Auftragsverarbeiter, Speicherorte, Löschung, Rechte und Kontakt.'
})
useHead({title: 'Datenschutz'})
</script>
