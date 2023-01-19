import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SingleCategory from '../../components/SingleCategory';
import { DocumentData, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { fetchAlbumsFromApi } from '../../axios/global';
import Link from 'next/link';
import Loader from '../../components/Loader';
import { useAlbumContext } from '../../context/AlbumContext';
const AlbumDetail = () => {
  const { query, ...routes } = useRouter();
  const [data, setData] = useState<DocumentData>();
  const [spotifyLink, setSpotifyLink] = useState('');
  const [fetching, setFetching] = useState(false);
  const { setCategoryValue } = useAlbumContext();
  const [albumColor, setAlbumColor] = useState('');
  const [colorMode, setColorMode] = useState(false);

  const getAlbumDetail = async () => {
    setFetching(true);
    try {
      if (query.AlbumDetail && typeof query.AlbumDetail === 'string') {
        let album;
        if (query.AlbumDetail.includes('-')) {
          album = query.AlbumDetail.split('-')[0];
        } else album = query.AlbumDetail;

        const docRef = doc(db, 'albums', `${album}`);
        const docSnap = await getDoc(docRef);
        setData(docSnap.data());

        const spotifyDetails = await fetchAlbumsFromApi(album);

        if (spotifyDetails.albums?.items[0]?.data?.uri)
          setSpotifyLink(spotifyDetails.albums.items[0]?.data?.uri);
        setFetching(false);
        getRandomColor();
      }
    } catch (err) {
      console.error(err);
      setFetching(false);
    }
  };

  const getRandomColor = () => {
    if (data) {
      let randomIndex = Math.floor(Math.random() * data.colors.length);
      let randomItem = data.colors[randomIndex];
      setAlbumColor(randomItem);
    }
  };
  useEffect(() => {
    getAlbumDetail();
  }, []);
  useEffect(() => {
    getRandomColor();
  }, [colorMode]);
  return (
    <>
      <div
        className={`min-h-screen  text-lighttext`}
        style={{ background: albumColor ? albumColor : 'bg-red-100' }}
      >
        {fetching ? (
          <div className="h-[70vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          data && (
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
                  <span
                    onClick={() => setColorMode(!colorMode)}
                    className="cursor-pointer px-4 text-[10px] py-1 border border-black rounded-xl"
                  >
                    Dark
                  </span>
                </div>
              </div>

              <div className="flex flex-col pt-10 sm:space-x-10 sm:flex-row">
                <div className="">
                  <Image
                    src={data.albumCover}
                    alt="/"
                    width={695}
                    height={605}
                  />
                </div>
                <div>
                  {spotifyLink && (
                    <p className="underline cursor-pointer">
                      <Link href={spotifyLink}>Spotify link</Link>
                    </p>
                  )}

                  <div className="md:pt-20">
                    <h2 className="font-bold capitalize md:text-4xl ">
                      {data.albumTitle}
                    </h2>
                    <p className="py-3 text-lg font-light capitalize">
                      {data.artistName}
                    </p>
                  </div>

                  <div>
                    <p className="py-3 text-base font-bold">
                      Album cover genre
                    </p>

                    <div className="pt-4 space-x-3">
                      {data.genres.map(
                        (
                          genre: { label: string; value: string },
                          index: number
                        ) => (
                          <SingleCategory
                            key={index}
                            text={genre.label}
                            color={genre.value}
                            isDetail
                            getCategory={(value) => setCategoryValue(value)}
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="py-3 text-base font-bold">
                      Album cover palette
                    </p>

                    <div className="flex items-center border border-gray-600 w-fit">
                      {data.colors.map((color: string, index: React.Key) => (
                        <span
                          className={`bg-[${color}] p-5`}
                          style={{ background: color }}
                          key={index}
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default AlbumDetail;
