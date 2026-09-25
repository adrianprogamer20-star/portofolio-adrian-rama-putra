import profileImage from "./assets/DSC_0633 copy.png"
function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
        <div className="h-16 max-w-7xl mx-auto px-margin lg:px-margin-desktop flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <img
              alt="Dev Portfolio Logo"
              class="h-8 w-auto object-contain"
              src={profileImage}
            />
            <a
              className="flex items-center gap-space-xs font-code-md text-code-md text-primary tracking-tight"
              data-path="overview"
              href="#"
            >
              <span className="text-primary-container"></span>
              <span className="font-semibold text-on-surface">
                Informatics
              </span>
              <span className="text-primary-container"></span>
            </a>
          </div>
          <nav
            className="hidden md:flex items-center gap-space-sm"
            data-active-classes="bg-surface-container-high text-primary-container font-semibold rounded-lg"
          >
            <a
              className="px-space-md py-space-xs rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
              data-path="tentang"
              href=""
            >
              Tentang
            </a>
            <a
              className="px-space-md py-space-xs rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
              data-path="keahlian"
              href="#"
            >
              Keahlian
            </a>
            <a
              class="px-space-md py-space-xs rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
              data-path="proyek"
              href="#"
            >
              Proyek
            </a>
            <a
              className="px-space-md py-space-xs rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
              data-path="pengalaman"
              href="#"
            >
              Pengalaman
            </a>
            <a
              className="px-space-md py-space-xs rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
              data-path="kontak"
              href="#"
            >
              Kontak
            </a>
          </nav>
          <div className="flex items-center gap-space-md">
            <a
              className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary-container font-code-sm text-code-sm font-semibold shadow-[0_0_16px_rgba(0,240,255,0.3)] hover:shadow-[0_0_24px_rgba(0,240,255,0.5)] transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-[16px]">
                download
              </span>
              <span>Download CV</span>
            </a>
            <div className="flex items-center pl-space-xs">
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
                src={profileImage}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
