import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import DefaultLayout from '../layouts/DefaultLayout';
import { AlbumContextProvider } from '../context/AlbumContext';
import { useState, useEffect } from 'react';
import { SplashScreen } from '../components/SplashScreen';
import { AnimatePresence } from 'framer-motion';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <DefaultLayout>
        <AlbumContextProvider>
          <SplashScreen />
          <Component {...pageProps} />
        </AlbumContextProvider>
      </DefaultLayout>
    </AnimatePresence>
  );
}

export default MyApp;
