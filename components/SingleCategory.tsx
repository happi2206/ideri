import React from 'react';
import { useAlbumContext } from '../context/AlbumContext';

interface Props {
  color: 'blue' | 'purple' | 'yellow' | 'teal' | 'pink' | 'beige' | string;
  text: string;
  getCategory?: (category: string) => void;
}
const SingleCategory = ({ color, text, getCategory }: Props) => {
  const { categoryValue } = useAlbumContext();
  return (
    <span
      className={`genrespan ${
        categoryValue !== '' && categoryValue !== text ? 'opacity-40' : ''
      }   ${color}`}
      onClick={() => {
        getCategory && getCategory(text);
      }}
    >
      {text}
    </span>
  );
};

export default SingleCategory;
