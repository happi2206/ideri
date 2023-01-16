import React, { useState } from 'react';
import SingleCategory from './SingleCategory';
import { useAlbumContext } from '../context/AlbumContext';

const Categories = () => {
  const { setCategoryValue, setFilterValue } = useAlbumContext();

  const setCategory = (value: string) => {
    setCategoryValue(value);
    setFilterValue('');
  };
  return (
    <div className="w-full h-full py-5 space-x-5 overflow-x-scroll md:py-10 no-scrollbar">
      <SingleCategory
        text="Abstract"
        color="blue"
        getCategory={(value) => setCategory(value)}
      />
      <SingleCategory
        text="Experimental"
        color="purple"
        getCategory={(value) => setCategory(value)}
      />
      <SingleCategory
        text="Photography"
        color="yellow"
        getCategory={(value) => setCategory(value)}
      />
      <SingleCategory
        text="Ethereal"
        color="teal"
        getCategory={(value) => setCategory(value)}
      />
      <SingleCategory
        text="Futuristic"
        color="pink"
        getCategory={(value) => setCategory(value)}
      />
      <SingleCategory
        text="Minimalistic"
        color="beige"
        getCategory={(value) => setCategory(value)}
      />
    </div>
  );
};

export default Categories;
