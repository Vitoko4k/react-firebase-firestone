import React from 'react';
import './App.css';

import Links from './componets/Links'
import LinksForm from './componets/LinksForm'

function App() {
  return (
    <div className='container p-4'>
      <div className='row'>
      <LinksForm />
      <Links />
      </div>
    </div>
  );
}

export default App;
