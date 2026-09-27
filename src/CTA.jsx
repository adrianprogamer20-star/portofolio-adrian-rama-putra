function CTA() {
  return (
    <>
      <section
        className="w-full py-space-2xl bg-surface-container-lowest relative overflow-hidden"
        id="kontak-kolaborasi"
      >
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            <div data-aos="fade-right" className="lg:col-span-5 flex flex-col justify-between gap-space-xl">
              <div className="flex flex-col gap-space-md">
                <div className="font-code-md text-code-md text-primary-container tracking-wider flex items-center gap-space-xs">
                  <span>[05]</span>
                  <span>GET IN TOUCH</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  Mari Berkolaborasi & Bangun Solusi Bersama
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Saya sedang membuka diri untuk posisi
                  <strong className="text-on-surface">
                    Full-time Software Engineer / Full-Stack Web Developer
                  </strong>
                  atau proyek kontrak bernilai tinggi. Siap kerja secara Onsite
                  (Jakarta/Purwakarta/Bandung/Jabodetabek) maupun 100% Remote.
                </p>

                <div className="flex flex-col gap-space-sm pt-space-md">
                  <a
                    className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all"
                    href="mailto:dimas.dev@example.com"
                  >
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined text-[20px]">
                        alternate_email
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-code-sm text-code-sm text-outline">
                        Email Langsung
                      </span>
                      <span className="font-body-md text-body-md text-on-surface font-semibold">
                        adrianrama1453@gmail.com
                      </span>
                    </div>
                  </a>
                  <a
                    className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all"
                    href="https://wa.me/6281234567890"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary-fixed">
                      <span className="material-symbols-outlined text-[20px]">
                        chat
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-code-sm text-code-sm text-outline">
                        WhatsApp / Direct Call
                      </span>
                      <span className="font-body-md text-body-md text-on-surface font-semibold">
                        +62 81322356305
                      </span>
                    </div>
                  </a>
                  <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[20px]">
                        location_on
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-code-sm text-code-sm text-outline">
                        Lokasi & Fleksibilitas
                      </span>
                      <span className="font-body-md text-body-md text-on-surface font-semibold">
                        Jakarta /Purwakarta / Bandung • Remote Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-high flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary-container text-[24px]">
                  verified
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  Available for Immediate Onboarding • Q1 2025
                </span>
              </div>
            </div>

            <div data-aos="fade-left"className="lg:col-span-7 flex flex-col p-space-xl rounded-2xl bg-surface-container-low shadow-xl">
              <form className="flex flex-col gap-space-md" id="contactForm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-code-sm text-code-sm text-on-surface-variant font-medium"
                      for="contact-name"
                    >
                      Nama Lengkap *
                    </label>
                    <input
                      className="w-full px-space-md py-3 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-highest transition-all"
                      id="contact-name"
                      placeholder="misal: Rama Putra"
                      required=""
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-code-sm text-code-sm text-on-surface-variant font-medium"
                      for="contact-email"
                    >
                      Email Kantor / Perusahaan *
                    </label>
                    <input
                      className="w-full px-space-md py-3 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-highest transition-all"
                      id="contact-email"
                      placeholder="rama@perusahaan.com"
                      required=""
                      type="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-code-sm text-code-sm text-on-surface-variant font-medium"
                    for="contact-subject"
                  >
                    Tujuan / Subjek Pesan *
                  </label>
                  <select
                    className="w-full px-space-md py-3 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest transition-all"
                    id="contact-subject"
                    required=""
                  >
                    <option className="bg-surface" value="fulltime">
                      Tawaran Kerja Full-Time (Software Engineer)
                    </option>
                    <option className="bg-surface" value="contract">
                      Proyek Kontrak / Freelance Full-Stack
                    </option>
                    <option className="bg-surface" value="interview">
                      Undangan Wawancara / Screening Tech
                    </option>
                    <option className="bg-surface" value="other">
                      Pertanyaan Lain & Diskusi Terbuka
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-code-sm text-code-sm text-on-surface-variant font-medium"
                    for="contact-message"
                  >
                    Isi Pesan / Detail Proyek *
                  </label>
                  <textarea
                    className="w-full px-space-md py-3 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-highest transition-all"
                    id="contact-message"
                    placeholder="Ceritakan ringkas mengenai posisi, lingkup proyek, atau teknologi yang digunakan..."
                    required=""
                    rows="4"
                  ></textarea>
                </div>

                <button
                  className="w-full mt-2 py-3.5 px-space-lg rounded-lg bg-primary-container text-on-primary-container font-code-md text-code-md font-bold shadow-[0_0_24px_rgba(0,240,255,0.3)] hover:shadow-[0_0_32px_rgba(0,240,255,0.5)] transition-all flex items-center justify-center gap-space-xs"
                  id="submitBtn"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    send
                  </span>
                  <span>Kirim Pesan Sekarang</span>
                </button>

                <div
                  className="hidden p-space-md rounded-lg bg-tertiary-container text-on-tertiary-container font-code-sm text-code-sm flex items-center gap-space-xs"
                  id="formSuccess"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    check_circle
                  </span>
                  <span>
                    Terima kasih! Pesan Anda telah terkirim. Dimas akan
                    merespons dalam waktu 24 jam.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-surface-container-lowest py-space-2xl">
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col items-center md:items-start gap-space-xs">
            <div className="flex items-center gap-space-xs font-code-md text-code-md text-primary">
              <span className="text-primary-container">//</span>
              <span className="font-semibold text-on-surface">
                Fresh Graduate Informatics
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              © Adrian Rama Putra Portfolio. Architected for
              performance & clean code.
            </p>
          </div>
          <div className="flex items-center gap-space-md">
            <a
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary-container hover:bg-surface-container-highest transition-all"
              href="https://github.com/adrianprogamer20-star"
              rel="noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
            </a>
            <a
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary-container hover:bg-surface-container-highest transition-all"
              href="https://www.linkedin.com/in/adrian-rama-putra-4766b33ba"
              rel="noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">
                terminal
              </span>
            </a>
            <a
              aria-label="Email"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary-container hover:bg-surface-container-highest transition-all"
              href="adrianrama1453@gmail.com"
            >
              <span className="material-symbols-outlined text-[18px]">
                alternate_email
              </span>
            </a>
            <a
              aria-label="LeetCode"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary-container hover:bg-surface-container-highest transition-all"
              href="https://journal.fkom.uniku.ac.id/ilkom/article/view/564/169"
              rel="noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">
                data_object
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default CTA;
