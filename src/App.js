import React from 'react';
import './App.css';
import Authenticated from './components/Authenticated';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/AppRouter';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (
    <>
     <Authenticated />
    </>
  );
}

export default App;
