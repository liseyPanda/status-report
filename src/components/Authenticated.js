import React from 'react';

import CardLogin from './CardLogin';
import Dashboard from '../pages/Dashboard';
//import Form from '../pages/Form'

import { useAuth0 } from '@auth0/auth0-react';
import AppRouter from './AppRouter';

const Authenticated = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <AppRouter /> : <CardLogin />;
};

export default Authenticated;