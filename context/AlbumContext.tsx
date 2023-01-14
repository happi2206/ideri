import { createContext, useContext, useEffect, useState } from 'react';
const AlbumContext = createContext<any>({});

export const useAlbumContext = () => useContext(AlbumContext);

export const AlbumContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [reload, setReload] = useState(false);
  //   useEffect(() => {

  //     return () => unsubscribe();
  //   }, []);

  const reloadprev = () => {
    console.log('reloading');
    setReload(!reload);
  };

  return (
    <AlbumContext.Provider value={{ reload, reloadprev }}>
      {children}
    </AlbumContext.Provider>
  );
};
