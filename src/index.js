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
import AppWrapper from './components/AppWrapper/appwrapper';

/**
 * Racine de l'application React.
 * @module Root
 */

// Création de la racine de l'application React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path='accomodation/:id' element={<Accommodation />}/>
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  </React.StrictMode>,
);
