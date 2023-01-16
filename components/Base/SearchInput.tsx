import React, { useState } from 'react';
import Button from './Button';
import { Icon } from '@iconify/react';
import Categories from '../Categories';
import { useAlbumContext } from '../../context/AlbumContext';

const SearchInput = () => {
  const { setFilterValue, setCategoryValue } = useAlbumContext();

  const [searchInput, setSearchInput] = useState('');

  const submitSearch = () => {
    setFilterValue(searchInput.toLowerCase());
    setCategoryValue('');
  };
  return (
    <div className="py-8 md:py-10 ">
      <div className="">
        <p className="mb-3 text-sm text-customgray800">Categories</p>
        <p className="flex items-center space-x-2 uppercase cursor-pointer boldparagraph">
          <span>Music genres</span>
          <Icon icon={`akar-icons:chevron-up`} />
        </p>

        <Categories />
      </div>

      <div className="pt-4 border-b border-gray-300 "></div>
      <p className="mt-10 uppercase boldparagraph">
        Search for album and single covers
      </p>
      <div className=" text-gray-200 flex justify-between sm:max-w-[600px] w-full space-x-3  pt-3 ">
        <div className=" space-x-3 flex h-12 items-center justify-between w-full px-2  md:text-base text-gray-400 bg-[#DADADA]  border border-[#A4A3A3]">
          <Icon icon="akar-icons:search" />
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                submitSearch();
              }
            }}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full bg-[#DADADA] focus:outline-none"
          />
        </div>

        <Button
          isSearch
          onClick={() => {
            submitSearch();
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
