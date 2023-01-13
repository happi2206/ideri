export interface IAlbum {
  albumCover: string;
  albumTitle: string;
  genres: { value: string; label: string }[];
  artistName: string;
}
