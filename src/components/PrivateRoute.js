import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth.js';


export const PrivateRoute = ({ component: Component, redirectTo = '/login'}) => {
  const { isLogged, isRefreshed } = useAuth();
  const shouldRedirect = !isLogged && !isRefreshed;

  return shouldRedirect ? <Navigate to={ redirectTo } /> : Component;
};
