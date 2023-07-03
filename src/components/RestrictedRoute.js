import { useAuth } from './hooks/useAuth.js';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = 'contacts'}) => {
  const { isLogged } = useAuth();

  return isLogged ? <Navigate to={redirectTo} /> : Component;
};
