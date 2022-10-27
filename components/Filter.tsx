import React from 'react';
import Dropdown from './Base/Dropdown';
import SearchInput from './Base/SearchInput';

const Filter = () => {
  return (
    <>
      <SearchInput />

      <div className="flex justify-end py-4 md:py-8">
        <Dropdown
          values={['Title', 'Artist']}
          getValue={() => console.log('object')}
        />
      </div>
    </>
  );
};

export default Filter;
