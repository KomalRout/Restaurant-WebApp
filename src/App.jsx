import './App.css';
import React from 'react';
import ReservationPage from './pages/Reservation/index';
import AboutUsPage from './pages/Aboutus/index';
import { Route, Routes } from "react-router-dom";
// import { Navigate } from 'react-router-dom';
//  import Header from './components/Header';
import Home from './pages/Home';
import ContactPage from './pages/Contact/index';
import OrderonlinePage from './pages/Orderonline/index';
// import CheckoutPage from './pages/Checkout/index';
// import OrderonlineColumn from './pages/Orderonline/OrderonlineColumn';
import HomePage from './pages/HomePage/index';


function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/aboutus' element={<AboutUsPage />} />
    <Route path='/reservation' element={<ReservationPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='/orderonline' element={<OrderonlinePage />} />
    </Routes>
    </>
  )
}

export default App;
