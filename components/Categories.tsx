import React, { useState } from 'react';
import SingleCategory from './SingleCategory';
import { useAlbumContext } from '../context/AlbumContext';

const Categories = () => {
  const { categoryValue, setCategoryValue, setFilterValue } = useAlbumContext();

  const setCategory = (value: string) => {
    setCategoryValue(value);
    setFilterValue('');
  };

  const categories = [
    {
      text: 'Abstract',
      color: 'blue',
    },
    {
      text: 'Experimental',
      color: 'purple',
    },
    {
      text: 'Photography',
      color: 'yellow',
    },
    {
      text: 'Ethereal',
      color: 'teal',
    },
    {
      text: 'Futuristic',
      color: 'pink',
    },
    {
      text: 'Minimalistic',
      color: 'beige',
    },
  ];
  return (
    <div className="w-full h-full py-5 space-x-5 overflow-x-scroll md:py-10 no-scrollbar">
      {categoryValue !== '' && (
        <span
          onClick={() => setCategoryValue('')}
          className="pl-1 text-lg font-black cursor-pointer genrespan opacity-80 red"
        >
          All
        </span>
      )}
      {categories.map((category, index) => (
        <SingleCategory
          key={index}
          text={category.text}
          color={category.color}
          getCategory={(value) => setCategory(value)}
        />
      ))}
    </div>
  );
};

export default Categories;
