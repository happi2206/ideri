import React, { MouseEventHandler } from 'react';
import Spinner from '../Spinner';

interface Props {
  children: React.ReactNode;
  isSearch?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  full?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isSubmitting?: boolean;
}

const Button = ({
  type = 'button',
  full,
  children,
  isSearch,
  onClick,
  disabled,
  isSubmitting,
}: Props) => {
  return (
    <button
      className={`${isSearch ? 'px-12 py-3' : 'p-4'} ${
        disabled ? 'bg-customgray200 cursor-not-allowed' : 'bg-dark'
      } ${
        full && 'w-full'
      } font-bold flex items-center justify-center text-center md:text-base text-sm text-light hover:opacity-80`}
      onClick={onClick}
      disabled={disabled || isSubmitting}
      type={type}
    >
      {isSubmitting && <Spinner />}

      {children}
    </button>
  );
};

export default Button;
