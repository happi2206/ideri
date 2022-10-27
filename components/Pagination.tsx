import { Icon } from '@iconify/react';
import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center w-full paginationlist">
      <nav>
        <ul>
          <li>
            <Icon icon="akar-icons:chevron-left" />
          </li>

          <li>1</li>
          <li className="active">2</li>
          <li>3</li>

          <li>
            <Icon icon="akar-icons:chevron-right" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
