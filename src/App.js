import Router from './routes/Router';
import { useRequestData } from './hooks/useRequestData';
import { useState } from 'react';
import { URL_BASE } from './constants/URL_BASE';

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
