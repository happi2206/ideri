import React, { useEffect } from 'react';
import Album from './Album';
import albums from '../data/albums';
import Pagination from './Pagination';
import { fetchAlbumsFromApi } from '../axios/global';
const AlbumList = () => {
  const fetchAlbums = async () => {
    // const albums = await fetchAlbumsFromApi(`currents`);
    // console.log(albums);
  };
  useEffect(() => {
    fetchAlbums();
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
        {albums.map((album, index) => (
          <Album
            image={album.image}
            title={album.title}
            artist={album.artist}
            key={index}
          />
        ))}
      </div>

      <div className="pb-20 pt-14">
        <Pagination />
      </div>
    </>
  );
};

export default AlbumList;
