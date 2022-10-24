import React from 'react';
import Dropdown from './Base/Dropdown';
import SearchInput from './Base/SearchInput';

const Filter = () => {
  return (
    <>
      <SearchInput />

      <div className="border-b border-gray-300"></div>

      <div className="flex justify-end py-8">
        <Dropdown
          values={['Title', 'Artist']}
          getValue={() => console.log('object')}
        />
      </div>
    </>
  );
};

export default Filter;
