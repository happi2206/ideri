import type { NextPage } from 'next';
import AlbumList from '../components/AlbumList';
import Filter from '../components/Filter';
import { SetStateAction, useEffect, useState } from 'react';
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAlbumContext } from '../context/AlbumContext';
import Loader from '../components/Loader';
import EmptyState from '../components/EmptyState';
import Pagination from '../components/Pagination';

const Home: NextPage = () => {
  const { paginatedData, fetching, albums } = useAlbumContext();

  return (
    <div className="container page">
      <Filter />
      {fetching ? (
        <div className="h-[50vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : paginatedData.length > 0 ? (
        <>
          <AlbumList albums={paginatedData} />
          <div className="py-20 mb-20">
            <Pagination />
          </div>
        </>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Home;
