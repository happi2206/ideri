import React from 'react';
import AddForm from '../components/AddForm';

const UploadAlbum = () => {
  return (
    <div className="container flex justify-center py-20">
      <div className="w-full ">
        <div className="space-y-2 md:space-y-4">
          <h3 className="text-2xl font-bold text-center md:text-3xl text-primary">
            Upload Album Cover
          </h3>
          <p className="text-sm text-center text-customgray600">
            Please fill the form below to complete the process
          </p>

          <div className="w-9/12 pt-4 mx-auto border-b border-gray-300"></div>
        </div>
        <div className="mt-10">
          <AddForm />
        </div>
      </div>
    </div>
  );
};

export default UploadAlbum;
