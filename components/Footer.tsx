import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container flex  md:flex-row flex-col md:items-center py-10">
        <div className="flex items-center justify-between grow">
          <div>
            <Link href="/">
              <p className="font-bold cursor-pointer text-sm md:text-2xl text-light">
                IDERI
              </p>
            </Link>
            <p className="text-gray-200 font-light flex items-center text-sm space-x-1 md:pt-4">
              <Icon icon="emojione-monotone:copyright" />
              <span> All rights reserved</span>
            </p>
          </div>
        </div>
        <div className="text-light">
          <div className="flex items-center space-x-10">
            <p className="text-xs md:text-base">Spotify</p>
            <p className="text-xs md:text-base">Twitter</p>
            <p className="text-xs md:text-base">LinkedIn</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-2 md:py-4">
        <div className="text-gray-200 font-light text-xs">
          Made with love by Happi 🫶🏾
          <p className="text-center pt-3"> Designed by Ebi 💚</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
