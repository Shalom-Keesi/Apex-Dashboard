

import React from 'react';
import Chart from './Chart';
import LineGraphsB from './LineGraphsB';
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={
            <>
            <LineGraphsB/>
            </>
          }/>
          <Route path='/Chart' element={<Chart/>}/>




        </Routes>
      </Router>
    </div>

  );
}

export default App;
