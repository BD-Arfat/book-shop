import axios from '../../Components/utils/axios';

// book api 
export const getBook = async () => {
    const res = await axios.get('/product');
    return res.data;
  }

// end book api
