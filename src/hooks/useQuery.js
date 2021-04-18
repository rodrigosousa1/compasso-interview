import { useLocation } from 'react-router-dom';
import qs from 'query-string';

function useQuery() {
  const { search } = useLocation();
  const query = qs.parse(search);

  return query;
}

export { useQuery };
