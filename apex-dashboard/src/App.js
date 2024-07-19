import './App.css';
import LandingPage from './LandingPage';
import Overview from './Overview';
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={
            <>
            <LandingPage/>
            </>
          }/>
          <Route path='/Overview' element={<Overview/>}/>




        </Routes>
      </Router>
    </div>

  );
}

export default App;
