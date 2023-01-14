import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

const FileUploadBar = ({ title }: { title: string }) => {
  const [progress, setProgress] = useState(0);
  const [showCoverTitle, setShowCoverTitle] = useState(false);
  useEffect(() => {
    const incrementCount = () => {
      for (let i = 0; i < 100; i++) {
        if (progress < 99) setProgress(progress + 2);
        if (progress === 100) setShowCoverTitle(true);
      }
    };
    const timer = setTimeout(() => incrementCount(), 60);
    return () => clearTimeout(timer);
  }, [progress]);
  return (
    <div className="p-3 bg-gray-200 border border-customgray200">
      {showCoverTitle ? (
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium">{title}</p>

          {/* <span className="text-red-500 cursor-pointer">
            <Icon icon="ep:delete" />
          </span> */}
        </div>
      ) : (
        <div>
          <p className="text-xs font-medium">File uploading...</p>

          <div className="flex items-center py-1 space-x-2">
            <p className="text-customgray600 text-[10px]">{progress}%</p>
            <p className="text-customgray600 text-[10px]">
              <Icon icon="ci:dot-04-l" />
            </p>
            <p className="text-customgray600 text-[10px]">{3} seconds left</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadBar;
