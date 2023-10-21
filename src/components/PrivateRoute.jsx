import { useSelector } from 'react-redux';
import {
  Navigate,
  Route,
  Router,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const location = useLocation();
  return isLoggedIn ? children : <Navigate to="/login" state={location} />;
};
