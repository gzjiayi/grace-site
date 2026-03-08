import HeroTyping from "./components/HeroTyping";
import Header from "./components/Header";
import ExperienceSection from "./components/ExperienceSection";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main
      className="max-w-2xl mx-auto px-6 pt-2 pb-12 md:pt-4 md:pb-20 min-h-screen flex flex-col gap-15"
      id="top"
    >
      {/* 1. Header */}
      <Header />

      {/* 2. Hero Section */}
      <section className="flex flex-col gap-6">
        <HeroTyping />
        <p className="text-base md:text-[17px] text-[#b3b3b3] leading-relaxed">
          I&apos;m a fourth-year computer engineering student at the University
          of Waterloo, focused on building thoughtful, user-friendly software.
        </p>
        <p className="text-base md:text-[17px] text-[#b3b3b3] leading-relaxed">
          I love using code to build things that make everyday life a little
          easier.
        </p>
      </section>

      {/* 3. Experience Section */}
      <ExperienceSection />

      {/* 4. Projects Section */}
      <section className="flex flex-col gap-6 pt-10">
        <h2 className="text-2xl font-mono font-medium tracking-tight text-[#f5f5f5]">
          Projects
        </h2>

        {projects.map((project) => (
          <div key={project.github}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-base font-medium text-[#f5f5f5] transition-all hover:text-[#cfcfcf] hover:underline hover:decoration-[#cfcfcf] [text-decoration-thickness:1px] underline-offset-4"
            >
              {project.title}
            </a>
            <p className="mt-1 text-sm text-[#8a8a8a]">{project.meta}</p>
          </div>
        ))}
      </section>

      {/* 5. Hobbies Section */}
      <section className="flex flex-col gap-4 pt-10 pb-20">
        <h2 className="text-2xl font-mono font-medium tracking-tight text-[#f5f5f5]">
          When not coding...
        </h2>
        <p className="text-base text-[#b3b3b3] leading-relaxed">I am...</p>
      </section>
    </main>
  );
}
