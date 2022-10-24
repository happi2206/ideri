import React from 'react';
import Button from './Button';
import { Icon } from '@iconify/react';
import Categories from '../Categories';
const SearchInput = () => {
  return (
    <div className=" py-10">
      <p className="boldparagraph uppercase">
        Search for album and single covers
      </p>
      <div className=" text-gray-200 flex justify-between max-w-[600px] w-full  pt-3 ">
        <div className=" space-x-3 flex items-center justify-between w-full px-2 py-2 md:text-base text-gray-400 bg-[#F9F8F8]  border border-[#A4A3A3]">
          <Icon icon="akar-icons:search" />
          <input
            type="text"
            placeholder="Search"
            className=" focus:outline-none bg-[#F9F8F8] w-full"
          />
        </div>

        <Button isSearch>Search</Button>
      </div>

      <div className="pt-12">
        <p className="boldparagraph uppercase">Music genres</p>

        <Categories />
      </div>
    </div>
  );
};

export default SearchInput;
