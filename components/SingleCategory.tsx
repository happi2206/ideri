import React from 'react';

interface Props {
  color: 'blue' | 'purple' | 'yellow' | 'teal' | 'pink' | 'beige' | string;
  text: string;
}
const SingleCategory = ({ color, text }: Props) => {
  return <span className={`genrespan ${color}`}>{text}</span>;
};

export default SingleCategory;
