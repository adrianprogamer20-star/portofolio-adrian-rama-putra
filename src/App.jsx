import Profile from "./Profile";
import Pendidikan from "./Pendidikan";
import Sertifikasi from "./Sertifikasi";
import ProyekUnggul from "./ProyekUnggul";
import WorkExp from "./WorkExp";
import CTA from "./CTA";
import profileImage from "./assets/DSC_0633 copy.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
        <div className="h-16 max-w-7xl mx-auto px-margin lg:px-margin-desktop flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <img
              alt="Dev Portfolio Logo"
              className="h-8 w-auto object-contain"
              src={profileImage}
            />
            <a
              className="flex items-center gap-space-xs font-code-md text-code-md text-primary tracking-tight"
              data-path="overview"
              href="#beranda"
            >
              <span className="text-primary-container"></span>
              <span className="font-semibold text-on-surface">Informatics</span>
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
              href="#Pendidikan"
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
              className="px-space-md py-space-xs rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
              data-path="proyek"
              href="#projekapp"
            >
              Projekapp
            </a>
            <a
              className="px-space-md py-space-xs rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
              data-path="pengalaman"
              href="#techstack"
            >
              TechStack
            </a>
            <a
              className="px-space-md py-space-xs rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
              data-path="kontak"
              href="#pengalamanind"
            >
              Pengalaman
            </a>
          </nav>
          <div className="flex items-center gap-space-md">
            <a
              className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary-container font-code-sm text-code-sm font-semibold shadow-[0_0_16px_rgba(0,240,255,0.3)] hover:shadow-[0_0_24px_rgba(0,240,255,0.5)] transition-all"
              href="https://drive.google.com/file/d/1fHZOpGEyXTnsIDAcjuVCAkVdkrZ45bue/view?usp=sharing"
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
      <Profile />
      <Pendidikan />
      <Sertifikasi />
      <ProyekUnggul />
      <WorkExp />
      <CTA />
    </>
  );
}
export default App;
