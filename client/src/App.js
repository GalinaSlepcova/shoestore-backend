import React from 'react';
import { BrowserRouter } from 'react-router';
import AppRouter from './components/AppRouter';


const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};


export default App;
