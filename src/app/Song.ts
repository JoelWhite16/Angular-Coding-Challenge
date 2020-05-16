import { Artist } from './Artist';
export interface Song {
  id: number;
  title: string;
  artist: Artist;
  chordsPresent: boolean;
  tabTypes: string[];
}
