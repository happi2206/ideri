import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Button from './Base/Button';

const Navigation = () => {
  const route = useRouter();
  return (
    <nav className="z-10 flex items-center w-full py-4 flex-nowrap bg-light">
      <div className="container flex items-center">
        <div className="flex items-center grow">
          <Link href="/">
            <p className="font-bold cursor-pointer md:text-2xl">IDERI</p>
          </Link>
        </div>
        <div className="sp">
          <div className="flex items-center space-x-10">
            <p className="text-sm md:text-base">About</p>
            <Button
              onClick={() => route.push('/uploadalbum')}
              disabled={route.route === '/uploadalbum'}
            >
              Upload album cover
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
