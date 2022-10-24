import { Icon } from '@iconify/react';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

interface Props {
  values: string[];
  getValue: (value: string) => void;
}

const Dropdown = ({ values, getValue }: Props) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClicks);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClicks);
    };
  });
  const handleOutsideClicks = (event: any) => {
    if (
      dropdown &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setDropdown(false);
    }
  };
  return (
    <div className="flex items-center space-x-3">
      <p className="text-sm">Sort by:</p>
      <div className="relative " ref={dropdownRef}>
        <div
          onClick={() => {
            setDropdown(!dropdown);
          }}
          className={`w-40 text-gray-500 text-xs justify-between bg-light py-2 md:py-4 px-3 md:px-5 capitalize cursor-pointer border-gray-300 border  text-center inline-flex items-center space-x-3`}
        >
          <span>{values[0]}</span>
          <span>
            <Icon icon={`akar-icons:chevron-${dropdown ? 'up' : 'down'}`} />
          </span>
        </div>

        {dropdown && (
          <div
            id="dropdown"
            className="absolute z-10 w-40 shadow bg-light md:w-44"
          >
            <ul className="text-sm text-gray-700 ">
              {values.map((value: string, i: React.Key) => (
                <div key={i}>
                  <li
                    className="p-3 text-xs capitalize cursor-pointer hover:bg-gray-200 "
                    onClick={() => {
                      getValue(value);
                      setDropdown(false);
                    }}
                  >
                    {value}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
