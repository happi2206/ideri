import React from 'react';

const Categories = () => {
  return (
    <div className="py-5 md:py-10 space-x-5 h-full w-full overflow-x-scroll no-scrollbar">
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
