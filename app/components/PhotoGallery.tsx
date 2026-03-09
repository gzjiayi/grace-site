import Image from "next/image";
import { photos } from "@/data/photos";

const layoutClasses = ["row-span-2", "", "", "", "row-span-2", ""];

const mobileAspectClasses = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/3]",
];

export default function PhotoGallery() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[170px]">
      {photos.map((photo, index) => (
        <div
          key={photo.src}
          className={`group relative overflow-hidden rounded-md ring-1 ring-white/8 ${layoutClasses[index]}`}
        >
          <div
            className={`relative h-full w-full ${mobileAspectClasses[index]} sm:aspect-auto`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              style={{ objectPosition: photo.objectPosition ?? "center" }}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
        </div>
      ))}
    </div>
  );
}
