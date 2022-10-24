import Link from 'next/link';
import React from 'react';
import Button from './Base/Button';

const Navigation = () => {
  return (
    <nav className=" w-full flex flex-nowrap items-center py-4 bg-light z-10">
      <div className="container flex items-center">
        <div className="flex items-center  grow">
          <Link href="/">
            <p className="font-bold cursor-pointer md:text-2xl">IDERI</p>
          </Link>
        </div>
        <div className="sp">
          <div className="flex items-center space-x-10">
            <p className="text-sm md:text-base">Category</p>
            <p className="text-sm md:text-base">About</p>
            <p className="text-sm md:text-base">Contact Us</p>
            <Button>Upload album cover</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
