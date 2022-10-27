import axios from 'axios';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const options = {
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_HOST,
  },
};

export const fetchAlbumsFromApi = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/?q=${url}`, options);

  return data;
};
