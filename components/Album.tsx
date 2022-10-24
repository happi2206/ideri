import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Props {
  image: StaticImageData;
  title: string;
  artist: string;
}

const Album = ({ image, title, artist }: Props) => {
  return (
    <div className="cursor-pointer">
      <Image src={image} alt={`the album cover of ${title}`} />

      <div className="flex flex-col items-center">
        <h4 className="font-bold text-sm md:text-lg">{title}</h4>
        <p className="font-light text-xs md:text-base text-gray-400">
          {artist}
        </p>
      </div>
    </div>
  );
};

export default Album;
