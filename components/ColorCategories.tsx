import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';
import { useAlbumContext } from '../context/AlbumContext';

const ColorCategories = () => {
  const {
    setFilterValue,
    categoryValue,
    color,
    setCategoryValue,
    setColor,
    albums,
  } = useAlbumContext();

  const setCategory = (value: string) => {
    setColor(value);
    setFilterValue('');
    setCategoryValue('');
  };

  const [colors, setColors] = useState<string[]>([]);

  const getColors = () => {
    const colorArray = albums.map((album) => {
      return album.colors;
    });

    const mergedArray = [].concat(...colorArray);
    const uniqueArray: string[] = [];
    for (const item of mergedArray) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }

    setColors(uniqueArray);
  };

  useEffect(() => {
    getColors();
  }, []);

  return (
    <div className="w-full h-full py-5 space-x-5 overflow-x-scroll md:py-8 no-scrollbar">
      <div className="flex items-center space-x-5">
        {color !== '' && (
          <span
            onClick={() => setColor('')}
            className="pl-1 text-lg font-black cursor-pointer genrespan opacity-80 red"
          >
            All
          </span>
        )}

        {colors.map((color, index) => (
          <span
            className={`genrespan`}
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => setCategory(color)}
          >
            {color}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ColorCategories;
