import { Navigate } from 'react-router-dom';
import UserService from '../services/UserService';
import React from 'react';

const LoginRoute = (element: { children: React.ReactElement }) => {
  const isAuthenticated = UserService.isAuthenticated();
  if (!isAuthenticated) {
    return element.children;
  } else {
    console.log('Please logout first!');
    return <Navigate to='/' />;
  }
};

export default LoginRoute;
