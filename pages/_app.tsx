import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import DefaultLayout from '../layouts/DefaultLayout';
import { AlbumContextProvider } from '../context/AlbumContext';
import { useState, useEffect } from 'react';
import { SplashScreen } from '../components/SplashScreen';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <DefaultLayout>
      <AlbumContextProvider>
        <Component {...pageProps} />
      </AlbumContextProvider>
    </DefaultLayout>
  );
}

export default MyApp;
