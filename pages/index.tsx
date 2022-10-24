import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import AlbumList from '../components/AlbumList';
import Filter from '../components/Filter';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Filter />
      <AlbumList />
    </div>
  );
};

export default Home;
