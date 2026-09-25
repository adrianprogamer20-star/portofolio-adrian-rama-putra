
function Pendidikan() {
  return (
    <>
      <section
        className="w-full py-space-2xl bg-surface-container-lowest relative"
        id="Pendidikan"
      >
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="flex flex-col gap-space-2xl">
            <div data-aos="fade-right"className="flex flex-col gap-space-xs">
              <div className="font-code-md text-code-md text-primary-container tracking-wider flex items-center gap-space-xs">
                <span>[01]</span>
                <span>TENTANG SAYA & RIWAYAT AKADEMIK</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Komitmen pada Engineering Rigor & Kode Bersih
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div  data-aos="fade-right"className="lg:col-span-7 flex flex-col justify-between gap-space-lg p-space-xl rounded-2xl bg-surface-container-low">
                <div className="flex flex-col gap-space-md">
                  <span className="material-symbols-outlined text-[36px] text-primary-container">
                    psychology
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    Fondasi Komputasi Kuat untuk Solusi Dunia Nyata
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Sebagai sarjana teknik informatika dengan predikat Cum
                    Laude, saya berdedikasi membangun perangkat lunak yang
                    andal. Saya memandang pemrograman bukan sekadar merangkai
                    syntax, melainkan seni menyelesaikan masalah skala besar
                    melalui algoritma efisien, arsitektur modular
                    terdesentralisasi, serta visual antarmuka yang intuitif.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Pengalaman saya mencakup perancangan RESTful & gRPC API
                    berlatensi rendah, integrasi Payment Gateway bersertifikat,
                    hingga optimasi Web Vitals berbasis Next.js dengan
                    Server-Side Rendering & Caching Redis.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-md">
                  <div className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container">
                    <span className="font-code-sm text-code-sm text-primary-container font-semibold">
                      01. Scalable
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Desain stateless berorientasi pertumbuhan traffic
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container">
                    <span className="font-code-sm text-code-sm text-secondary font-semibold">
                      02. Tested
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Unit, Integration, & End-to-End coverage
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container">
                    <span className="font-code-sm text-code-sm text-tertiary-fixed font-semibold">
                      03. Ergonomic
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Sensitif terhadap kenyamanan user & DX
                    </span>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left" className="lg:col-span-5 flex flex-col justify-between p-space-xl rounded-2xl bg-surface-container-high relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
                <div className="flex flex-col gap-space-md">
                  <div className="inline-flex items-center justify-between">
                    <span className="px-space-md py-1 rounded-full bg-primary-container/20 text-primary-container font-code-sm text-code-sm font-semibold">
                      Tugas Akhir / Skripsi Unggulan
                    </span>
                    <span className="font-code-md text-code-md text-tertiary-fixed font-bold">
                      NILAI A
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug">
                    Rancang Bangun Aplikasi Ujian Online Berbasis Browser Fingerprint dan Integrasi Bukti Pelanggaran Siswa.
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Mengintegrasikan browser fingerprinting untuk mendeteksi perilaku mencurigakan selama ujian daring, serta mengembangkan sistem bukti pelanggaran siswa untuk meningkatkan integritas
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2 py-1 rounded bg-surface-container text-on-surface font-code-sm text-code-sm">
                      MySQL
                    </span>
                    <span className="px-2 py-1 rounded bg-surface-container text-on-surface font-code-sm text-code-sm">
                      Laravel 12
                    </span>
                    <span className="px-2 py-1 rounded bg-surface-container text-on-surface font-code-sm text-code-sm">
                      PHP 8.2
                    </span>
                    <span className="px-2 py-1 rounded bg-surface-container text-on-surface font-code-sm text-code-sm">
                      JavaScript
                    </span>
                    <span className="px-2 py-1 rounded bg-surface-container text-on-surface font-code-sm text-code-sm">
                      Tailwind CSS
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-space-sm pt-space-lg">
                  <span className="material-symbols-outlined text-[24px] text-outline">
                    school
                  </span>
                  <div className="flex flex-col">
                    <span className="font-code-sm text-code-sm text-on-surface font-semibold">
                      Universitas Informatika dan Bisnis Indonesia
                    </span>
                    <span className="font-body-sm text-body-sm text-outline">
                      Program Studi Informatika (2022 - 2026)
                    </span>
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
export default Pendidikan;
