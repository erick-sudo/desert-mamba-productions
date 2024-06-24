export interface Documentary {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  description: string;
  director: string;
  cast: string[];
  poster: string;
}

export interface Podcast {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  description: string;
  host: string;
  episodes: number;
  coverImage: string;
}
