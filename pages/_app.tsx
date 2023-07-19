import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import DefaultLayout from '../layouts/DefaultLayout';
import { AlbumContextProvider } from '../context/AlbumContext';
import { useState, useEffect } from 'react';
import { SplashScreen } from '../components/SplashScreen';
import { AnimatePresence, motion } from 'framer-motion';
function MyApp({ Component, pageProps }: AppProps) {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <DefaultLayout>
          <AlbumContextProvider>
            <Component {...pageProps} />
          </AlbumContextProvider>
        </DefaultLayout>
      )}
    </>
  );
}

export default MyApp;
