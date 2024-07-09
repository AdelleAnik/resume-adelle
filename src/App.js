import './App.css';
import React, { useEffect } from 'react';
import Homepage from './Pages/homepage';
import { initGA, logPageView } from './analytics';
import usePageTracking from './usePageTracking';

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  usePageTracking();
  return (
   <Homepage/>
  );
}

export default App;
