import type { NextPage } from 'next';
import AlbumList from '../components/AlbumList';
import Filter from '../components/Filter';
import { SetStateAction, useEffect, useState } from 'react';
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAlbumContext } from '../context/AlbumContext';
import Loader from '../components/Loader';
import EmptyState from '../components/EmptyState';

const Home: NextPage = () => {
  const { reFresh, filterValue, categoryValue } = useAlbumContext();
  const [albums, setAlbums] = useState<DocumentData[]>([]);
  const [fetching, setFetching] = useState(false);
  const temp: SetStateAction<DocumentData[]> = [];
  const handleFiltering = (query: string) => {
    const searchResults = temp.filter((item) => {
      if (query === 'albumTitle') {
        return item[query].includes(filterValue);
      } else if (query === 'genres') {
        return item.genres.some(
          (innerItem: { label: string }) => innerItem.label === categoryValue
        );
      }
    });
    setAlbums(searchResults);
  };

  const fetchAlbums = async () => {
    setFetching(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'albums'));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        temp.push(data);
        setAlbums(temp);
        if (filterValue !== '') {
          handleFiltering('albumTitle');
        }
        if (categoryValue !== '') {
          handleFiltering('genres');
        }
      });

      setFetching(false);
    } catch (err) {
      setFetching(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, [reFresh]);
  return (
    <div className="container page">
      <Filter />
      {fetching ? (
        <div className="h-[50vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : albums.length > 0 ? (
        <AlbumList albums={albums} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Home;
