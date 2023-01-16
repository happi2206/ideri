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
    console.log(query);
    if (query.AlbumDetail && typeof query.AlbumDetail === 'string') {
      let album;
      if (query.AlbumDetail.includes('-')) {
        album = query.AlbumDetail.split('-')[0];
      } else album = query.AlbumDetail;
      const docRef = doc(db, 'albums', `${album}`);
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    }
  };
  useEffect(() => {
    getAlbumDetail();
  }, []);
  return (
    <div className="min-h-screen bg-red-100 text-lighttex">
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

          <div className="flex flex-col pt-10 sm:space-x-10 sm:flex-row">
            <div className="">
              <Image src={data.albumCover} alt="/" width={695} height={605} />
            </div>
            <div>
              <p className="underline cursor-pointer">Spotify link</p>

              <div className="md:pt-20">
                <h2 className="font-bold capitalize md:text-4xl ">
                  {data.albumTitle}
                </h2>
                <p className="py-3 text-lg font-light capitalize">
                  {data.artistName}
                </p>
              </div>

              <div>
                <p className="py-3 text-base font-bold">Album cover genre</p>

                <div className="pt-4 sspace-x-3">
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
