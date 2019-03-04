import axios from 'axios';

const get = (path) => axios.get(path)
  .catch(error => {
    throw new Error('error X');
  });

export default {
  get
};
