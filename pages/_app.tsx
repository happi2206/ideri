import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import DefaultLayout from '../layouts/DefaultLayout';
import { AlbumContextProvider } from '../context/AlbumContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <AlbumContextProvider>
        <Component {...pageProps} />
      </AlbumContextProvider>
    </DefaultLayout>
  );
}

export default MyApp;
