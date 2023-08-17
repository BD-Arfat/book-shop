import axios from '../../Components/utils/axios';

export const getBook = async () => {
    const res = await axios.get('/product');
    return res.data;
  }