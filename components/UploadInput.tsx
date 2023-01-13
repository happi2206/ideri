import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import FileUploadBar from './FileUploadBar';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { setDoc } from 'firebase/firestore';
import Image from 'next/image';
interface Props {
  getImage: (url: string) => void;
}

const UploadInput = ({ getImage }: Props) => {
  const inputFileRef = React.useRef<HTMLInputElement | null>(null);
  const dragZoneRef = React.useRef<HTMLDivElement | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [showFileUploadBar, setShowFileUploadBar] = useState(false);
  const [filename, setFileName] = useState('');
  const [image, setImage] = useState('');
  const handleDrag = (e: {
    preventDefault: () => void;
    stopPropagation: () => void;
    type: string;
  }) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onChange(e.dataTransfer.files);
    }
  };

  const getInputRef = () => {
    if (!inputFileRef.current) return;
    inputFileRef.current.click();
  };
  const onChange = (event: FileList | null) => {
    if (event === null) return;
    const file = event[0];
    const storage = getStorage();
    const storageRef = ref(storage, file.name);

    uploadBytes(storageRef, file).then(async (snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        getImage(url);
        setImage(url);
      });
    });
    setFileName(file?.name);
    setShowFileUploadBar(true);
  };
  return (
    <div className="space-y-2">
      <label className="mb-2 text-sm md:text-base text-primary">
        Upload Album Cover
      </label>

      <div
        ref={dragZoneRef}
        onDragEnter={handleDrag}
        className="relative flex items-center justify-center p-10 border border-dashed border-primary"
      >
        {image ? (
          <Image src={image} alt="album image" width={200} height={200} />
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <span className="mb-3 text-customgray600">
              <Icon icon="akar-icons:image" width={40} />
            </span>
            <p className="text-sm font-medium text-center">
              Drop album cover here, or
              <span
                className="pl-1 underline cursor-pointer"
                onClick={getInputRef}
              >
                browse
              </span>
            </p>
            <p className="text-xs text-center text-customgray600">
              Supports jpg and png only
            </p>
          </div>
        )}

        {dragActive && (
          <div
            className="absolute inset-0 w-full h-full"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </div>

      {showFileUploadBar && <FileUploadBar title={filename} />}

      <input
        hidden
        ref={inputFileRef}
        className="w-full "
        id="file_input"
        type="file"
        onChange={(event) => {
          onChange(event.target.files);
        }}
        accept="image/*"
      />
    </div>
  );
};

export default UploadInput;
