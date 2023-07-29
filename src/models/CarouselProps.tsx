import { Manga } from "./Manga.type";

export interface CarouselProps {
  mangas: Manga[];
  currentIndex: number;
  setMangas: (mangas: Manga[]) => void;
  setCurrentIndex: (index: number) => void;
}
