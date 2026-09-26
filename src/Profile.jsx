import profileImage from "./assets/DSC_0633 copy.png";
function Profile() {
  return (
    <>
      <section id="beranda" className="relative w-full overflow-hidden pb-space-2xl pt-7 mt-7">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-container/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-secondary-container/20 blur-[140px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-surface-container-high shadow-inner">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary-fixed"></span>
                </span>
                <span className="font-code-sm text-code-sm text-tertiary tracking-wide font-medium">
                  Terbuka untuk Peluang Kerja (Open to Work)
                </span>
              </div>

              <div className="flex flex-col gap-space-xs" data-aos="fade-right">
                <div className="font-code-md text-code-md text-primary-container tracking-wider flex items-center gap-space-xs">
                  <span className="opacity-60">// HALO, SAYA</span>
                  <span className="font-bold text-on-surface">
                    Adrian Rama Putra S.Kom.
                  </span>
                </div>
                <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-on-surface tracking-tight leading-tight">
                  Membangun Aplikasi Web
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary">
                    Skalabel & Cepat
                  </span>
                </h1>
                <p className="font-headline-sm text-headline-sm text-primary font-medium">
                  Full-Stack Developer & Software Systems Engineer
                </p>
              </div>

              <p data-aos="fade-right" className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Lulusan S1 Teknik Informatika dengan spesialisasi arsitektur web
                terdistribusi (React/Laravel, JavaScript, MySQL).
                Memadukan performa backend tangguh dengan interface modern
                berfokus penuh pada kenyamanan pengguna.
              </p>

              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <a data-aos="zoom-in"
                  className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary-container text-on-primary-container font-code-md text-code-md font-bold shadow-[0_0_24px_rgba(0,240,255,0.35)] hover:shadow-[0_0_32px_rgba(0,240,255,0.55)] transition-all transform hover:-translate-y-0.5"
                  href="#projekapp"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    rocket_launch
                  </span>
                  <span>Lihat Proyek Unggulan</span>
                </a>
                <a data-aos="zoom-in"
                  className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-surface-container-high text-on-surface hover:text-primary-container hover:bg-surface-container-highest font-code-md text-code-md font-semibold transition-all"
                  href="#kontak-kolaborasi"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    contact_mail
                  </span>
                  <span>Hubungi Saya</span>
                </a>
                <div className="flex items-center gap-space-xs pl-space-xs">
                  <a
                    className="p-2.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary-container hover:bg-surface-container transition-all"
                    href="https://github.com/adrianprogamer20-star"
                    rel="noreferrer"
                    target="_blank"
                    title="GitHub Profile"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      code
                    </span>
                  </a>
                  <a
                    className="p-2.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary-container hover:bg-surface-container transition-all"
                    href="https://linkedin.com/in/adrian-rama-putra-4766b33ba"
                    rel="noreferrer"
                    target="_blank"
                    title="LinkedIn Profile"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      terminal
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex flex-col items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute top-1 -left-4 z-20 px-space-md py-1.5 rounded-lg bg-surface-container-highest/90 backdrop-blur-md shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="font-code-sm text-code-sm font-semibold text-primary">
                    Laravel 12 / React JS
                  </span>
                </div>
                <div className="absolute -bottom-4 -right-4 z-100 px-space-md py-1.5  rounded-lg bg-surface-container-highest/90 backdrop-blur-md shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-code-sm text-code-sm font-semibold text-secondary">
                    MySQL & Mikrotik Network Configuration
                  </span>
                </div>

                <div data-aos="zoom-in" className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container-low shadow-2xl">
                  <img
                    alt="Adrian Rama Putra S.Kom."
                    className="w-full h-full object-cover mt-7"
                    src={profileImage}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
                </div>

                <div data-aos="fade-up" className="relative -mt-16 mx-4 z-30 rounded-xl bg-surface-container-lowest/95 backdrop-blur-xl p-space-md shadow-2xl flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-error"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-tertiary-fixed"></div>
                    </div>
                    <span className="font-code-sm text-code-sm text-outline font-mono">
                      adrian-linux/mikrotik: ~
                    </span>
                  </div>
                  <div className="font-code-sm text-code-sm text-on-surface-variant flex flex-col gap-1">
                    <p>
                      <span className="text-secondary-fixed">const</span>
                      <span className="text-primary-container">engineer</span> =
                      (
                    </p>
                    <p className="pl-4">
                      status:
                      <span className="text-tertiary">'ready_to_hire'</span>,
                    </p>
                    <p className="pl-4">
                      degree:
                      <span className="text-tertiary">
                        'S.Kom - Teknik Informatika'
                      </span>
                      ,
                    </p>
                    <p className="pl-4">
                      gpa:
                      <span className="text-tertiary">
                        '3.82 / 4.00 (Cum Laude)'
                      </span>
                      ,
                    </p>
                    <p className="pl-4">
                      core: [<span className="text-tertiary">'FullStack'</span>,
                      <span className="text-tertiary">'Microservices'</span>,
                      <span className="text-tertiary">'Clean Code'</span>]
                    </p>
                    <p>);</p>
                    <p className="text-primary-container flex items-center pt-1 font-semibold">
                      <span> git status --active</span>
                      <span className="inline-block w-2 h-4 ml-1 bg-primary-container animate-pulse"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in"className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-2xl pt-space-xl">
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-low shadow-sm">
              <span className="font-display-hero text-headline-lg lg:text-display-hero text-primary-container font-extrabold tracking-tight">
                3.82
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface mt-1">
                IPK (Cum Laude)
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                S1 Teknik Informatika
              </span>
            </div>
            <div  data-aos="zoom-in"className="flex flex-col p-space-lg rounded-xl bg-surface-container-low shadow-sm">
              <span className="font-display-hero text-headline-lg lg:text-display-hero text-secondary font-extrabold tracking-tight">
                4+
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface mt-1">
                Proyek Selesai
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Full-stack, APIs, & Cloud
              </span>
            </div>
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-low shadow-sm">
              <span className="font-display-hero text-headline-lg lg:text-display-hero text-tertiary-fixed font-extrabold tracking-tight">
                3x
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface mt-1">
                Magang Industri
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                FinTech & GovTech Labs
              </span>
            </div>
            <div data-aos="zoom-in"className="flex flex-col p-space-lg rounded-xl bg-surface-container-low shadow-sm">
              <span className="font-display-hero text-headline-lg lg:text-display-hero text-primary font-extrabold tracking-tight">
                99.8%
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface mt-1">
                Uptime & SLA
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Skripsi Microservice Arch
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Profile;
