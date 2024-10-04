import { Outlet, Navigate } from 'react-router-dom';
import UserService from '../services/UserService';

const AuthRoute = () => {
  const user = UserService.getUser();
  return user ? <Outlet /> : <Navigate to='/login' />;
};

export default AuthRoute;
