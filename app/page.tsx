"use client";

import { useRef, useState } from "react";
import HeroTyping from "./components/HeroTyping";
import Header from "./components/Header";
import ExperienceSection from "./components/ExperienceSection";
import { projects } from "../data/projects";
import PhotoGallery from "./components/PhotoGallery";

export default function Home() {
  const [showPhotos, setShowPhotos] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const GALLERY_SCROLL_OFFSET = 120;
  const GALLERY_SCROLL_DELAY = 250;
  const MOBILE_GALLERY_MAX_HEIGHT = "max-h-[3200px]";
  const DESKTOP_GALLERY_MAX_HEIGHT = "sm:max-h-[1400px]";

  const handleTogglePhotos = () => {
    if (!showPhotos) {
      setShowPhotos(true);

      setTimeout(() => {
        if (galleryRef.current) {
          const y =
            galleryRef.current.getBoundingClientRect().top +
            window.scrollY -
            GALLERY_SCROLL_OFFSET;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
      }, GALLERY_SCROLL_DELAY);
    } else {
      setShowPhotos(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <main
        className="w-full max-w-2xl mx-auto px-6 pt-6 md:pt-8 pb-12 flex-1"
        id="top"
      >
        <Header />
        <div className="mt-8 md:mt-10 flex flex-col gap-16 md:gap-20">
          <section className="mt-2 flex flex-col gap-6">
            <HeroTyping />
            <p className="text-base md:text-[17px] text-[#b3b3b3] leading-relaxed">
              I&apos;m a fourth-year computer engineering student at the
              University of Waterloo, focused on building thoughtful,
              user-friendly software.
            </p>
            <p className="text-base md:text-[17px] text-[#b3b3b3] leading-relaxed">
              I love using code to build things that make everyday life a little
              easier.
            </p>
          </section>

          <ExperienceSection />

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-mono font-medium tracking-tight text-[#f5f5f5]">
              Projects
            </h2>

            {projects.map((project) => (
              <div key={project.github}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono group inline-flex items-center gap-1 text-base font-medium text-[#f5f5f5] transition-all hover:text-[#cfcfcf]"
                >
                  <span className="underline-offset-4 group-hover:underline group-hover:decoration-[#cfcfcf] [text-decoration-thickness:1px]">
                    {project.title}
                  </span>
                  <span className="text-[0.95rem] opacity-70 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
                <p className="mt-1 text-sm text-[#8a8a8a]">{project.meta}</p>
              </div>
            ))}
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-mono font-medium tracking-tight text-[#f5f5f5]">
              When not coding...
            </h2>

            <p className="text-base text-[#b3b3b3] leading-relaxed">
              I&apos;m usually running, playing volleyball, or getting overly
              invested in making a good matcha latte. Lately, I&apos;ve also been
              getting into photography.
            </p>

            <button
              type="button"
              onClick={handleTogglePhotos}
              className="w-fit text-sm text-[#8a8a8a] transition hover:text-[#cfcfcf] hover:underline underline-offset-4"
            >
              {showPhotos ? "Hide photos" : "View photos"}
            </button>

            <div
              ref={galleryRef}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showPhotos
                  ? `${MOBILE_GALLERY_MAX_HEIGHT} ${DESKTOP_GALLERY_MAX_HEIGHT} translate-y-0 opacity-100`
                  : "max-h-0 translate-y-2 opacity-0"
              }`}
            >
              <div className="pt-3">
                <PhotoGallery />
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full max-w-2xl mx-auto px-6 pb-8 text-xs font-mono text-[#6f6f6f]">
        &copy; 2026 Grace Zhang
      </footer>
    </div>
  );
}
