import { Image } from "./Image";

export interface Artist {
  id: string;
  genres: string[];
  images: Image[];
  name: string;
  type: "artist";
  popularity: number;
  uri: string;
}

export interface ArtistsResponse {
  total: number;
  items: Artist[];
}
