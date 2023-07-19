import { DocumentData, collection, getDocs } from 'firebase/firestore';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { db } from '../firebase/config';

interface IContext {
  reFresh: boolean;
  fetching?: boolean;
  filterValue: string;
  categoryValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
  setCategoryValue: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
  fetchAlbums: () => Promise<any>;
  albums: DocumentData[];
  paginatedData: DocumentData[];
  setAlbums?: Dispatch<SetStateAction<DocumentData[]>>;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  totalPages: number;
  currentPage: number;
}

let AlbumContext = createContext<IContext>({
  reFresh: false,
  filterValue: '',
  categoryValue: '',
  setFilterValue: (value: SetStateAction<string>) => value,
  setCategoryValue: (value: SetStateAction<string>) => value,
  setCurrentPage: (value: SetStateAction<number>) => value,
  setItemsPerPage: (value: SetStateAction<number>) => value,
  fetchAlbums: async () => {
    return;
  },
  albums: [],
  paginatedData: [],
  handleNextPage: () => {
    return;
  },
  handlePrevPage: () => {
    return;
  },
  totalPages: 2,
  currentPage: 2,
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
  const temp: SetStateAction<DocumentData[]> = [];
  const [albums, setAlbums] = useState<DocumentData[]>([]);
  const [fetching, setFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  // pagination

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice data based on start and end indexes
  const paginatedData = albums.slice(startIndex, endIndex);

  // Handle pagination navigation
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

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

        console.log(data);
        const allPages = Math.ceil(temp.length / itemsPerPage);
        setTotalPages(allPages);

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
    setReFresh(!reFresh);
    fetchAlbums();
  }, [filterValue, categoryValue]);

  return (
    <AlbumContext.Provider
      value={{
        categoryValue,
        setCategoryValue,
        reFresh,
        filterValue,
        setFilterValue,
        fetchAlbums,
        albums,
        setAlbums,
        fetching,
        paginatedData,
        handleNextPage,
        totalPages,
        handlePrevPage,
        currentPage,
        setCurrentPage,
        setItemsPerPage,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};
