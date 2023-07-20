import React, { useState } from 'react';
import Dropdown from './Base/Dropdown';
import SearchInput from './Base/SearchInput';
import { useAlbumContext } from '../context/AlbumContext';

const Filter = () => {
  const { setItemsPerPage, setSortBy } = useAlbumContext();
  const [perPageValue, setPerPageValue] = useState(10);
  const [currentFilterValue, setCurrentFilterValue] = useState('');
  return (
    <>
      <SearchInput />

      <div className="flex flex-col items-end gap-5 py-4 sm:flex-row sm:justify-end md:py-8">
        {/* <Dropdown
          currentValue={currentFilterValue}
          values={['Title', 'Artist']}
          getValue={(value) => {
            if (typeof value !== 'number') {
              setCurrentFilterValue(value);
              setSortBy(value);
            }
          }}
        /> */}
        <Dropdown
          currentValue={perPageValue}
          values={[2, 5, 10]}
          text="Per page"
          getValue={(value) => {
            if (typeof value !== 'string') {
              setPerPageValue(value);
              setItemsPerPage(value);
            }
          }}
        />
      </div>
    </>
  );
};

export default Filter;
