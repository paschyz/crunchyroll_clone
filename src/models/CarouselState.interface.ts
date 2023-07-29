import { Manga } from "./Manga.type";

export interface CarouselState {
    mangas: Manga[];
    currentIndex: number;
  }
  