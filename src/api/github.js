import axios from 'axios';

function github() {
  const defaultOptions = {
    baseURL: 'https://api.github.com/',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const instance = axios.create(defaultOptions);

  return instance;
}

export default github();
