import './App.css';
import React from 'react';
import ReservationPage from './pages/Reservation/index';
import AboutUsPage from './pages/Aboutus/index';
import { Route, Routes } from "react-router-dom";
import ContactPage from './pages/Contact/index';
import OrderonlinePage from './pages/Orderonline/index';
import HomePage from './pages/HomePage/index';
import MenuPage from './pages/Menu/menu';
import AddToCartPage from './pages/AddToCart/index';

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/aboutus' element={<AboutUsPage />} />
    <Route path='/reservation' element={<ReservationPage />} />
    <Route path='/contactus' element={<ContactPage />} />
    <Route path='/orderonline' element={<OrderonlinePage />} />
    <Route path='/menu' element={<MenuPage/>}/>
    <Route path ='/addToCart' element={<AddToCartPage/>}/>
    </Routes>
    </>
  )
}

export default App;
