import React from 'react';
import SingleCategory from './SingleCategory';

const Categories = () => {
  return (
    <div className="w-full h-full py-5 space-x-5 overflow-x-scroll md:py-10 no-scrollbar">
      <SingleCategory text="Abstract" color="blue" />
      <SingleCategory text="Experimental" color="purple" />
      <SingleCategory text="Photography" color="yellow" />
      <SingleCategory text="Ethereal" color="teal" />
      <SingleCategory text="Futuristic" color="pink" />
      <SingleCategory text="Minimalistic" color="beige" />
    </div>
  );
};

export default Categories;
