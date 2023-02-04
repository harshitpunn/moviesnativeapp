import axios from 'axios';
import { api_key, api_url } from './configs';

export const getData = async (url) => {
  let response = await axios.get(
    `${api_url}${url}${url.includes('search/') ? '&' : '?'}api_key=${api_key}`
  );
  return response.data;
};
