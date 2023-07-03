import { useSelector } from 'react-redux';
import {
    isLoggedin,
    getActive,
    getTasks,
} from '../../redux/master/selectors';

export const useAuth = () => {
  const isLogged = useSelector(isLoggedin);
  const isRefreshed = useSelector(getActive);
  const user = useSelector(getTasks);

  return {
    isLogged,
    isRefreshed,
    user,
  };
};
