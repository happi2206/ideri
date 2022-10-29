import React from 'react';

const Categories = () => {
  return (
    <div className="w-full h-full py-5 space-x-5 overflow-x-scroll md:py-10 no-scrollbar">
      <span className="genrespan blue">Abstract</span>
      <span className="genrespan purple">Experimental</span>
      <span className="genrespan yellow">Photography</span>
      <span className="genrespan teal">Ethereal</span>
      <span className="genrespan pink">Futuristic</span>
      <span className="genrespan beige">Minimalistic</span>
    </div>
  );
};

export default Categories;
