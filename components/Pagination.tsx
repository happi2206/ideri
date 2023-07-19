import { Icon } from '@iconify/react';
import React from 'react';
import { useAlbumContext } from '../context/AlbumContext';

const Pagination = () => {
  const {
    totalPages,
    handleNextPage,
    handlePrevPage,
    currentPage,
    setCurrentPage,
  } = useAlbumContext();
  const numbersArray = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex justify-center w-full paginationlist">
      <nav>
        <ul>
          {currentPage > 1 && (
            <li onClick={handlePrevPage} className="arrow">
              <Icon icon="akar-icons:chevron-left" />
            </li>
          )}

          {numbersArray.map((number, index) => (
            <li
              key={index}
              className={`${number === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </li>
          ))}
          {currentPage < totalPages && (
            <li onClick={handleNextPage} className="arrow">
              <Icon icon="akar-icons:chevron-right" />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
