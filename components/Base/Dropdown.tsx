import { Icon } from '@iconify/react';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

interface Props {
  values: string[] | number[];
  getValue: (value: string | number) => void;
  text?: string;
  currentValue?: string | number;
  isPlain?: boolean;
}

const Dropdown = ({
  currentValue,
  values,
  getValue,
  isPlain,
  text = 'Sort by:',
}: Props) => {
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
      {!isPlain && <p className="text-sm">{text}</p>}
      <div className="relative " ref={dropdownRef}>
        <div
          onClick={() => {
            setDropdown(!dropdown);
          }}
          className={`w-40 text-xs justify-between ${
            isPlain
              ? 'uppercase boldparagraph'
              : 'bg-light capitalize text-gray-500 border-gray-300 border px-3 md:px-5'
          } py-2 md:py-4 cursor-pointer text-center inline-flex items-center space-x-3`}
        >
          <span>{currentValue || values[0]}</span>
          <span>
            <Icon icon={`akar-icons:chevron-${dropdown ? 'up' : 'down'}`} />
          </span>
        </div>

        {dropdown && (
          <div
            id="dropdown"
            className="absolute z-10 w-40 border rounded shadow-lg border-primary bg-light md:w-44"
          >
            <ul className="text-sm text-gray-700 ">
              {values.map((value: string | number, i: React.Key) => (
                <div key={i}>
                  <li
                    className="p-3 text-xs capitalize rounded cursor-pointer hover:bg-gray-200 "
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
