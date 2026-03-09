import ExperienceCard from "./ExperienceCard";
import { experience } from "../../data/experience";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col gap-6 pt-10">
      <div>
        <h2 className="text-2xl font-mono font-medium tracking-tight text-[#f5f5f5]">
          Where I&apos;ve worked
        </h2>
        <p className="mt-1.5 text-sm text-[#8a8a8a] leading-relaxed">
          Across fintech, healthcare, aerospace, and robotics. See resume for
          full experience.
        </p>
      </div>
      <div className="rounded-lg border border-white/[0.08] bg-white/[0.01] px-4 py-3 transition-colors duration-200 hover:border-white/[0.1] hover:bg-white/[0.02]">
        <div className="flex flex-col divide-y divide-white/[0.08]">
          {experience.map((entry) => (
            <ExperienceCard
              key={entry.company}
              company={entry.company}
              role={entry.role}
            />
          ))}
        </div>
        <div
          className="border-t border-white/[0.08] pt-3 pb-1"
          aria-label="Recruiting call to action"
        >
          <p className="text-base font-medium text-[#6b9dc3]">Your Company?</p>
          <p className="text-sm text-[#b3b3b3] leading-relaxed">
            Let&apos;s build something together — I&apos;m currently looking for
            Fall 2026 internship opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
