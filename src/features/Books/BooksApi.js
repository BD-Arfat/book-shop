import axios from '../../Components/utils/axios';

export const getBooks = async () => {
    const res = await axios.get('/products');
    return res.data;
  }