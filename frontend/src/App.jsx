
import React from 'react';
import Navbar from './components/NavbarComponent';
import Home from './pages/Home';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
        path="/"
        element={<Home/>}
        />
        <Route
        path="/register"
        element={<RegisterPage/>}
        />
        <Route
        path="/login"
        element={<LoginPage/>}
        />
        <Route
        path="/cart"
        element={<Cart/>}
        />
        <Route
        path="/pizza/p001"
        element={<Pizza/>}
        />
        <Route
        path="/profile"
        element={<Profile/>}
        />
        <Route
        path="/404"
        element={<NotFound/>}
        />
      {/* <Home /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <Cart /> */}
      {/* <Pizza /> */}
    </Routes>
    <Footer />
    </div>
  );
};
export default App;