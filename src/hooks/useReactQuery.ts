import { useQuery } from 'react-query';
import api from '~/config/api';

const useTopRatedQuery = () => {
  return useQuery({
    queryKey: 'top-rated',
    queryFn: async () => {
      const res = await api.get('/movie/top_rated?language=en-US&page=1');
      return res.data?.results;
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export { useTopRatedQuery };
