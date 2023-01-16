import React, { useEffect, useState } from 'react';
import { MultiValue } from 'react-select';
import Button from './Base/Button';
import Input from './Base/Input';
import SelectInput from './Base/SelectInput';
import UploadInput from './UploadInput';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useRouter } from 'next/router';
import DialogBox from './DialogBox';

const AddForm = () => {
  const route = useRouter();
  const [albumTitle, setAlbumTitle] = useState('');
  const [artistName, setArtistName] = useState('');
  const [isValid, setValid] = useState(false);
  const [image, setImage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState('');
  const [genres, setGenres] = useState<
    MultiValue<{
      value: string;
      label: string;
    }>
  >([]);
  const submitForm = () => {
    event?.preventDefault();

    try {
      const value = doc(db, 'albums', albumTitle.toLowerCase());
      setSubmitting(true);
      setDoc(value, {
        albumTitle: albumTitle.toLowerCase(),
        artistName: artistName.toLowerCase(),
        genres: genres,
        albumCover: image,
      });

      setTimeout(() => {
        setIsSuccessful('success');
        route.push('/');
      }, 2500);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
      setIsSuccessful('failed');
    }
  };

  const validate = () => {
    if (image) {
      return artistName.length && albumTitle.length && genres.length;
    }
  };

  useEffect(() => {
    const isValid = validate();
    setValid(!!isValid);
  }, [artistName, albumTitle, genres, image]);
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
        <UploadInput getImage={(url) => setImage(url)} />
        <Button
          isSubmitting={submitting}
          full
          disabled={!isValid}
          type="submit"
        >
          Upload
        </Button>
      </form>

      {isSuccessful !== '' && <DialogBox text={isSuccessful} />}
    </div>
  );
};

export default AddForm;
