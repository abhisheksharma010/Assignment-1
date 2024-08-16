import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import image1 from "@/assets/working.png";
import image2 from "@/assets/time.png";
import image3 from "@/assets/schedule.png";
import image4 from "@/assets/bar-chart.png";
import image5 from "@/assets/graph.png";
import image6 from "@/assets/growth.png";
import image7 from "@/assets/pie-chart.png";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const images = [image1, image2, image3, image4, image5, image6, image7];

export const selectRandomImage = (): string =>
  images[Math.floor(Math.random() * images.length)];
