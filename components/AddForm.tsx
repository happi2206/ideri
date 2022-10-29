import React, { useState } from 'react';
import Button from './Base/Button';
import Input from './Base/Input';
import SelectInput from './Base/SelectInput';
import UploadInput from './UploadInput';

const AddForm = () => {
  const [buttonActive, setButtonActive] = useState(false);
  return (
    <div className="flex justify-center">
      <form className="w-full space-y-8 md:w-8/12 lg:w-6/12">
        <Input label="Album Title" placeholder="Enter album title" />
        <Input label="Artist Name" placeholder="Enter artist name" />
        <SelectInput label="Select Genres" />
        <UploadInput />
        <Button full disabled={!buttonActive}>
          Upload
        </Button>
      </form>
    </div>
  );
};

export default AddForm;
