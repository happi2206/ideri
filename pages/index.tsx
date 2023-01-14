import type { NextPage } from 'next';
import AlbumList from '../components/AlbumList';
import Filter from '../components/Filter';
import { SetStateAction, useEffect, useState } from 'react';
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { db } from '../firebase/config';
import { AlbumContextProvider } from '../context/AlbumContext';

const Home: NextPage = () => {
  const [albums, setAlbums] = useState<DocumentData[]>([]);
  const fetchAlbums = async () => {
    const querySnapshot = await getDocs(collection(db, 'albums'));
    console.log(querySnapshot, 'query');
    const temp: SetStateAction<DocumentData[]> = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      temp.push(data);
      setAlbums(temp);
    });
  };
  useEffect(() => {
    fetchAlbums();
  }, []);
  return (
    <div className="container">
      <AlbumContextProvider>
        <Filter />
        <AlbumList albums={albums} />
      </AlbumContextProvider>
    </div>
  );
};

export default Home;
