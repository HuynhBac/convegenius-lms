import { Navigate } from 'react-router-dom';
import UserService from '../services/UserService';
import React from 'react';

const PermissionRoute = (element: { children: React.ReactElement, permissionName: string }) => {
  const user = UserService.getUser();
  if (!user) {
    return element.children;
  } else {
    console.log('Please logout first!');
    return <Navigate to='/' />;
  }
};

export default PermissionRoute;
