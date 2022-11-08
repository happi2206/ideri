import React, { useEffect, useState } from 'react';
import { MultiValue } from 'react-select';
import Button from './Base/Button';
import Input from './Base/Input';
import SelectInput from './Base/SelectInput';
import UploadInput from './UploadInput';

const AddForm = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const [albumTitle, setAlbumTitle] = useState('');
  const [artistName, setArtistName] = useState('');
  const [isValid, setValid] = useState(false);
  const [file, setFile] = useState<any>();
  const [genres, setGenres] = useState<
    MultiValue<{
      value: string;
      label: string;
    }>
  >([]);
  const submitForm = () => {
    setButtonActive(true);
  };

  const validate = () => {
    if (file) {
      return artistName.length && albumTitle.length && genres.length;
    }
  };
  useEffect(() => {
    const isValid = validate();
    setValid(!!isValid);
  }, [artistName, albumTitle, genres, file]);
  return (
    <div className="flex justify-center">
      <form
        onSubmit={submitForm}
        className="w-full space-y-8 md:w-8/12 lg:w-6/12"
      >
        <Input
          onChange={(e) => setAlbumTitle(e.target.value)}
          label="Album Title"
          placeholder="Enter album title"
        />
        <Input
          onChange={(e) => setArtistName(e.target.value)}
          label="Artist Name"
          placeholder="Enter artist name"
        />
        <SelectInput label="Select Genres" onChange={(e) => setGenres(e)} />
        <UploadInput getFile={(file: any) => setFile(file)} />
        <Button full disabled={!isValid}>
          Upload
        </Button>
      </form>
    </div>
  );
};

export default AddForm;
