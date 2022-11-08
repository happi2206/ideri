import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import SingleCategory from '../../components/SingleCategory';
import DarkFantasy from '/assets/images/kanye-darkfantasy.png';
const AlbumDetail = () => {
  const route = useRouter();
  return (
    <div className="bg-red-100 text-lighttext">
      <div className="container p-10">
        <div className="flex justify-between">
          <div
            onClick={() => route.back()}
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
            <Image src={DarkFantasy} alt="/" width={695} height={605} />
          </div>
          <div>
            <p className="underline cursor-pointer">Spotify link</p>

            <div className="md:pt-20">
              <h2 className="font-bold md:text-4xl ">
                My Beautiful Dark Fantasy
              </h2>
              <p className="py-3 text-lg font-light">Kanye West</p>
            </div>

            <div>
              <p className="py-3 text-base font-bold">Album cover genre</p>

              <div className="space-x-3">
                <SingleCategory text="Photography" color="yellow" />
                <SingleCategory text="Ethereal" color="teal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetail;
