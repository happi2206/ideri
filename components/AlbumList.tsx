import React, { useEffect } from 'react';
import Album from './Album';
// import albums from '../data/albums';
import Pagination from './Pagination';
import { fetchAlbumsFromApi } from '../axios/global';
import {
  DocumentData,
  collection,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { IAlbum } from '../interfaces/album';
interface Props {
  albums: DocumentData[];
}

const AlbumList = ({ albums }: Props) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
        {albums.map((album, index) => (
          <Album
            image={album.albumCover}
            title={album.albumTitle}
            artist={album.artistName}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default AlbumList;
