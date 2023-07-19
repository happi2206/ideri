import React, { useState } from 'react';
import Dropdown from './Base/Dropdown';
import SearchInput from './Base/SearchInput';
import { useAlbumContext } from '../context/AlbumContext';

const Filter = () => {
  const { setItemsPerPage } = useAlbumContext();
  const [perPageValue, setPerPageValue] = useState(10);
  return (
    <>
      <SearchInput />

      <div className="flex flex-col items-end gap-5 py-4 sm:flex-row sm:justify-end md:py-8">
        <Dropdown
          values={['Title', 'Artist']}
          getValue={() => console.log('object')}
        />
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
