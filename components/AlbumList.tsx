import React from 'react';
import Album from './Album';
import albums from '../data/albums';
const AlbumList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {albums.map((album, index) => (
        <Album
          image={album.image}
          title={album.title}
          artist={album.artist}
          key={index}
        />
      ))}
    </div>
  );
};

export default AlbumList;
