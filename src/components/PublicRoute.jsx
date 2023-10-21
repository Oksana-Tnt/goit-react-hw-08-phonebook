import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { state } = useLocation();
  return !isLoggedIn ? children : <Navigate to={state ? state : '/'} />;
};
