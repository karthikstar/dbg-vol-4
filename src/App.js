import './App.css';
import React from 'react';
import Router from './routes';
import { Header } from './components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  )
}

export default App;
