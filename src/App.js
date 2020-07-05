import React from 'react';
import './App.scss';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Navigation, Content } from './components';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navigation />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;

