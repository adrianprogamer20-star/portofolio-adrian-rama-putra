import auli from "./assets/Screenshot (445).png";
import smp from "./assets/Screenshot (391).png";
function ProyekUnggul() {
  return (
    <>
      <section
        className="w-full py-space-2xl bg-surface-container-lowest relative"
        id="projekapp"
      >
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="flex flex-col gap-space-2xl">
            <div className="flex flex-col gap-space-xs" data-aos="fade-right">
              <div className="font-code-md text-code-md text-primary-container tracking-wider flex items-center gap-space-xs">
                <span>[03]</span>
                <span>PORTFOLIO & STUDI KASUS</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Proyek Unggulan Terkini
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Karya terpilih yang merefleksikan keahlian dalam arsitektur
                skala besar, kestabilan database, dan visual frontend modern.
              </p>
            </div>

            <div className="flex flex-col gap-space-xl">
              <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop p-space-lg lg:p-space-xl rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all">
                <div className="lg:col-span-6 flex flex-col justify-between rounded-xl overflow-hidden bg-surface-container-lowest p-space-md">
                  <div className="flex items-center justify-between pb-space-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed"></span>
                    </div>
                    <span className="font-code-sm text-code-sm text-outline">
                      app.omniflow.io
                    </span>
                  </div>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-container-high">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="High-fidelity dark mode software interface of OmniFlow, a modern real-time SaaS kanban and workflow management platform with glassmorphic cards, sprint charts, task columns, electric cyan accent buttons, and collaborative user avatar indicators on clean dark slate background."
                      src={smp}
                    />
                  </div>
                  <div className="pt-space-sm flex items-center justify-between font-code-sm text-code-sm text-outline">
                    <span>Latency: 45ms (Pusher WebSockets)</span>
                    <span className="text-tertiary-fixed">
                      Production Ready
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-code-sm text-code-sm text-primary-container font-semibold tracking-wider">
                        FULL-STACK WEB DEVELOPER
                      </span>
                      <span className="font-code-md text-code-md text-outline font-bold">
                        [01]
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                      Aplikasi Ujian Online Berbasis Browser Fingerprint serta
                      Integrasi Deteksi dan Bukti Pelanggaran Siswa SMP PGRI 9 Bandung
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Platform Ujian yang digunakan pihak sekolah SMP PGRI 9
                      Bandung untuk mendukung pelaksanaan ujian yang dapat
                      meningkatkan integritas akademik melalui deteksi perilaku
                      mencurigakan berbasis browser fingerprint dan sistem bukti
                      pelanggaran siswa.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-high font-code-sm text-code-sm text-primary-container">
                        Laravel 12 (PHP 8.2)
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-high font-code-sm text-code-sm text-on-surface">
                        JavaScript
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-high font-code-sm text-code-sm text-on-surface">
                        Bootstrap 5
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-high font-code-sm text-code-sm text-tertiary-fixed">
                        MySQL
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-space-md pt-space-sm">
                    <a
                      className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary-container font-code-sm text-code-sm font-bold shadow-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        visibility
                      </span>
                      <span>Live Demo</span>
                    </a>
                    <a
                      className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-highest text-on-surface hover:text-primary-container font-code-sm text-code-sm font-semibold transition-all"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        terminal
                      </span>
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div  data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop p-space-lg lg:p-space-xl rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all">
                <div className="lg:col-span-6 flex flex-col justify-between rounded-xl overflow-hidden bg-surface-container-lowest p-space-md">
                  <div className="flex items-center justify-between pb-space-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed"></span>
                    </div>
                    <span className="font-code-sm text-code-sm text-outline">
                      api.medisync.internal
                    </span>
                  </div>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-container-high">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Technical dashboard mockup for MediSync Telemedicine API engine showing interactive API swagger documentation, telemetry charts, throughput metrics, JWT security authorization headers, and microservice status nodes in dark tech styling with violet and cyan glows."
                      src={auli}
                    />
                  </div>
                  <div className="pt-space-sm flex items-center justify-between font-code-sm text-code-sm text-outline">
                    <span>Throughput: 2,500+ Req/Sec</span>
                    <span className="text-secondary">HIPAA Compliant Log</span>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-code-sm text-code-sm text-secondary font-semibold tracking-wider">
                        FULL-STACK WEB DEVELOPER
                      </span>
                      <span className="font-code-md text-code-md text-outline font-bold">
                        [02]
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                      Aplikasi Ujian Online dengan Mengintegrasikan Fitur Realtime Check dan juga Sertifikat Otomatis Pada Auli Learning Center 
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                     Platform Ujian Online yang digunakan pihak Auli Learning Center untuk mendukung pelaksanaan ujian yang dapat meningkatkan manajemen data melalui fitur realtime check dan juga sertifikat otomatis yang dapat diunduh oleh peserta ujian. Penerapan UI yang dapat mempermudah serta memberikan penyesuaian agar dapat digunakan pada device yang ada di sekolah.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-high font-code-sm text-code-sm text-secondary">
                       Laravel 12 ( PHP 8.2)
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-high font-code-sm text-code-sm text-tertiary-fixed">
                        MySQL
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-high font-code-sm text-code-sm text-primary-container">
                        Bootstrap 5
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-high font-code-sm text-code-sm text-on-surface">
                        JavaScript
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-space-md pt-space-sm">
                    <a
                      className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-secondary text-on-secondary font-code-sm text-code-sm font-bold shadow-sm hover:shadow-[0_0_20px_rgba(208,188,255,0.4)] transition-all"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        menu_book
                      </span>
                      <span>API Docs (Swagger)</span>
                    </a>
                    <a
                      className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-highest text-on-surface hover:text-secondary font-code-sm text-code-sm font-semibold transition-all"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        code
                      </span>
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProyekUnggul;
