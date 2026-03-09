type ExperienceCardProps = {
  company: string;
  role: string;
};

export default function ExperienceCard({ company, role }: ExperienceCardProps) {
  return (
    <div className="py-2">
      <p className="text-base font-medium text-[#f5f5f5]">{company}</p>
      <p className="text-sm text-[#8a8a8a]">{role}</p>
    </div>
  );
}
