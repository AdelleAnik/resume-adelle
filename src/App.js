import './App.css';
import React, { useEffect } from 'react';
import Homepage from './Pages/homepage';
import { initGA, logPageView } from './analytics';

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
   <Homepage/>
  );
}

export default App;
