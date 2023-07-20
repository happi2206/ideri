import Image from 'next/image';
import React from 'react';
import image from './../assets/images/Rectangle.png';
import image2 from './../assets/images/Dark.svg';
import image3 from './../assets/images/preview.png';

const About = () => {
  return (
    <div className="container pb-32 page secondaryfont">
      <div className="absolute top-0 bottom-0 left-0 right-0 hidden w-full h-full sm:block">
        <Image src={image} alt="background hash" />
      </div>

      <div className="flex justify-between py-20 i">
        <div className="mt-10 md:w-3/6 md:mt-0">
          <h1 className="text-2xl font-bold cursor-pointer text-dark md:text-6xl">
            IDERI
          </h1>
          <div className="text-[#757575]  flex sm:items-center gap-2 sm:gap-5 pt-8 pl-1">
            <p className="text-xs font-semibold cursor-pointer sm:text-base md:text-2xl">
              IDERI
            </p>
            <span className="text-2xl md:text-8xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z"
                />
              </svg>
            </span>
            <p className="text-xs font-semibold cursor-pointer sm:text-base md:text-2xl">
              2023
            </p>
          </div>

          <div className="relative z-50 font-semibold leading-6 cursor-pointer sm:text-base md:text-2xl flex-col gap-10 text-[#1E1E1E]  flex items-center  pt-8 pl-1">
            <p className="">
              Introducing Ideri, an open source tool that generates color
              palettes from your favourite music albums. A platform where art
              and melody intertwine in a harmonious dance of color! 🌈🎵
            </p>
            {/* 
            <p className="font-semibold leading-6 cursor-pointer sm:text-base md:text-4xl">
              Anyone can upload an album cover. Unleash your inner artist and
              let your favorite music albums paint your world with their unique
              and dazzling color palettes. 🎨🎶
            </p>

            <p className="font-semibold leading-6 cursor-pointer sm:text-base md:text-4xl">
              Ideri is the canvas for your tunes, transforming album covers into
              vibrant masterpieces that resonate with the beats of your soul.
              🎨🎶 🎉🎵
            </p> */}
          </div>
        </div>
        <div className="absolute top-0 right-0 z-0 w-4/12 py-20 md:w-5/12">
          <Image src={image2} className="w-full" alt="background hash" />
        </div>
      </div>
    </div>
  );
};

export default About;
