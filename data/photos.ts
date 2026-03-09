export type PhotoEntry = {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
  objectPosition?: string;
};

export const photos: PhotoEntry[] = [
  {
    src: "/photos/dog.jpg",
    alt: "Small fluffy dog sitting on a rug indoors",
    orientation: "portrait",
  },
  {
    src: "/photos/maroon_bells.jpg",
    alt: "Mountain lake surrounded by forest and hills under a blue sky",
    orientation: "landscape",
  },
  {
    src: "/photos/cats.jpg",
    alt: "Black-and-white and orange cats standing in a narrow alley",
    orientation: "landscape",
    objectPosition: "center 90%",
  },
  {
    src: "/photos/tunnel.jpg",
    alt: "Silhouettes of people walking through an arched tunnel toward bright light",
    orientation: "landscape",
  },
  {
    src: "/photos/ferry.jpg",
    alt: "Person standing on a ferry deck during sunset over the water",
    orientation: "portrait",
  },
  {
    src: "/photos/grasslands.jpg",
    alt: "Buffalo grazing on a grassy hillside with mountains in the background",
    orientation: "landscape",
    objectPosition: "center 48%",
  },
];
