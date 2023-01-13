import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import AlbumList from '../components/AlbumList';
import Filter from '../components/Filter';
import styles from '../styles/Home.module.scss';
import { SetStateAction, useEffect, useState } from 'react';
import { IAlbum } from '../interfaces/album';
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { db } from '../firebase/config';

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
      <Filter />
      <AlbumList albums={albums} />
    </div>
  );
};

export default Home;
