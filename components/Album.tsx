import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  image: StaticImageData;
  title: string;
  artist: string;
}

const Album = ({ image, title, artist }: Props) => {
  return (
    <Link
      href={`albumdetail/${title + '-' + artist}`}
      className="cursor-pointer"
    >
      <div className="cursor-pointer">
        <Image
          src={image}
          alt={`the album cover of ${title}`}
          width={400}
          height={400}
        />

        <div className="flex flex-col items-center">
          <h4 className="text-sm font-bold md:text-lg">{title}</h4>
          <p className="text-xs font-light text-gray-400 md:text-base">
            {artist}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Album;
