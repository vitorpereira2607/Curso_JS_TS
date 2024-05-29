import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';
import Navbar from './layouts/Navbar/Navbar';
import { LoginSignup } from './pages/Login/LoginSignup';
import  ErrorPage  from './pages/Error/ErrorPage';
import { HomePage } from './pages/Home/HomePage';
import { Categories } from './pages/Categories/Categories'
import { Cart } from './pages/Cart/Cart';
import { Builder } from './pages/Builder/Builder';
import { Footer } from './layouts/Footer/Footer';
import ShopContextProvider from '../src/context/ShopContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ShopContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginSignup />}></Route>
        <Route path="/categories" element={<Categories />}>
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/builder" element={<Builder />}></Route>
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
      </ShopContextProvider>
      <Footer />
    </Router>
  </React.StrictMode>
);
