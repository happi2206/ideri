import { Icon } from '@iconify/react';
import React from 'react';

interface Props {
  text?: string;
  successful?: string;
}
const DialogBox = ({ text = 'Album Saved', successful = 'success' }: Props) => {
  return (
    <div
      className={`fixed ${
        successful !== 'success'
          ? 'bg-red-300 border-red-800'
          : 'bg-green-300 border-green-800'
      } border-2  rounded-md w-60 md:w-96 top-4 right-2`}
    >
      <div
        id="toast-success"
        className="flex items-center w-full max-w-xs p-4 "
        role="alert"
      >
        <Icon icon="material-symbols:check-box" width={22} />
        <div className="ml-3 text-sm font-normal">{text}</div>
      </div>
    </div>
  );
};

export default DialogBox;
