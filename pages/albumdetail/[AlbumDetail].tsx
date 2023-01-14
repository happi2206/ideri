import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SingleCategory from '../../components/SingleCategory';
import { DocumentData, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
const AlbumDetail = () => {
  const { query, ...routes } = useRouter();
  const [data, setData] = useState<DocumentData>();

  const getAlbumDetail = async () => {
    if (query.AlbumDetail && typeof query.AlbumDetail === 'string') {
      let album = query.AlbumDetail.split('-')[0];
      const docRef = doc(db, 'albums', `${album}`);
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    }
  };
  useEffect(() => {
    getAlbumDetail();
  }, []);
  return (
    <div className="bg-red-100 text-lighttext">
      {data && (
        <div className="container p-10">
          <div className="flex justify-between">
            <div
              onClick={() => routes.back()}
              className="flex items-center space-x-3 font-medium cursor-pointer md:text-lg"
            >
              <Icon icon="eva:arrow-back-outline" />
              <p> Back</p>
            </div>
            <div>
              <span className="px-4 text-[10px] py-1 border border-black rounded-xl">
                Dark
              </span>
            </div>
          </div>

          <div className="flex pt-10 space-x-10">
            <div className="">
              <Image src={data.albumCover} alt="/" width={695} height={605} />
            </div>
            <div>
              <p className="underline cursor-pointer">Spotify link</p>

              <div className="md:pt-20">
                <h2 className="font-bold md:text-4xl ">{data.albumTitle}</h2>
                <p className="py-3 text-lg font-light">{data.artistName}</p>
              </div>

              <div>
                <p className="py-3 text-base font-bold">Album cover genre</p>

                <div className="space-x-3">
                  {data.genres.map(
                    (
                      genre: { label: string; value: string },
                      index: number
                    ) => (
                      <SingleCategory
                        key={index}
                        text={genre.label}
                        color={genre.value}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumDetail;
