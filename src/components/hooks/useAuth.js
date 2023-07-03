import { useSelector } from 'react-redux';
import {
    isLoggedIn,
    getActive,
    getTasks,
} from '../../redux/master/selectors';

export const useAuth = () => {
  const isLogged = useSelector(isLoggedIn);
  const isRefreshed = useSelector(getActive);
  const user = useSelector(getTasks);

  return {
    isLogged,
    isRefreshed,
    user,
  };
};
