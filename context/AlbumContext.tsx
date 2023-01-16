import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IContext {
  reFresh: boolean;
  filterValue: string;
  categoryValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
  setCategoryValue: Dispatch<SetStateAction<string>>;
}

let AlbumContext = createContext<IContext>({
  reFresh: false,
  filterValue: '',
  categoryValue: '',
  setFilterValue: (value: SetStateAction<string>) => value,
  setCategoryValue: (value: SetStateAction<string>) => value,
});

export const useAlbumContext = () => useContext(AlbumContext);

export const AlbumContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [reFresh, setReFresh] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  useEffect(() => {
    setReFresh(!reFresh);
  }, [filterValue, categoryValue]);

  return (
    <AlbumContext.Provider
      value={{
        categoryValue,
        setCategoryValue,
        reFresh,
        filterValue,
        setFilterValue,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};
