import React from 'react';
import { useAlbumContext } from '../context/AlbumContext';
import { useRouter } from 'next/router';

interface Props {
  color: 'blue' | 'purple' | 'yellow' | 'teal' | 'pink' | 'beige' | string;
  text: string;
  getCategory?: (category: string) => void;
  isDetail?: boolean;
}
const SingleCategory = ({ isDetail, color, text, getCategory }: Props) => {
  const { categoryValue } = useAlbumContext();
  const router = useRouter();
  return (
    <span
      className={`genrespan ${
        categoryValue !== '' && categoryValue !== text ? 'opacity-40' : ''
      }   ${color}`}
      onClick={() => {
        getCategory && getCategory(text);
      }}
    >
      {isDetail ? (
        <span
          className="pl-1 text-lg font-black cursor-pointer"
          onClick={() => {
            router.push('/');
          }}
        >
          {text}
        </span>
      ) : (
        <span>{text}</span>
      )}
    </span>
  );
};

export default SingleCategory;
