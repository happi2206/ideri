import React from 'react';

interface Props {
  children: React.ReactNode;
  isSearch?: boolean;
}

const Button = ({ children, isSearch }: Props) => {
  return (
    <button
      className={`${
        isSearch ? 'px-12 py-3' : 'p-4'
      } bg-dark font-bold md:text-base text-sm text-light hover:opacity-80`}
    >
      {children}
    </button>
  );
};

export default Button;
