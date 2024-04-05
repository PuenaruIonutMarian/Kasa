import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './styles/globals.scss';
import Error from './components/Error/error';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Apropos from './pages/Apropos/apropos';
import Accommodation from './pages/Accomodation/accomodation';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="app">
    	<Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="apropos" element={<Apropos />} />
        <Route path='accomodation/:id' element={<Accommodation />}/>
      </Routes>
      <Footer />
      </div>
    </Router>
  </React.StrictMode>,
);
