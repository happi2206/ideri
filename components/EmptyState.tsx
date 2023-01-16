import React from 'react';
import cat1 from './../assets/images/cat1.svg';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import { useAlbumContext } from '../context/AlbumContext';
const EmptyState = () => {
  const router = useRouter();
  const { filterValue, categoryValue } = useAlbumContext();
  return (
    <div className="flex items-center justify-center h-full mx-auto mb-20">
      <div>
        <Image
          src={cat1}
          width={600}
          height={400}
          alt="No albums to display"
          className="object-contain w-full h-auto "
        />
        <h1 className="text-center lg:text-lg">
          Oops! 🫣 It seems like there are no
          {filterValue !== '' || categoryValue !== '' ? (
            <span className="pl-1 pr-1 text-lg font-semibold lowercase">
              {filterValue + categoryValue}
            </span>
          ) : null}
          album covers to display.
        </h1>
        <p className="text-center">
          You can try uploading one yourself
          <span
            className="pl-1 text-lg font-black cursor-pointer"
            onClick={() => router.push('/uploadalbum')}
          >
            Here.
          </span>{' '}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
