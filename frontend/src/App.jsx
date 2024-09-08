
import React from 'react';
import Navbar from './components/NavbarComponent';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import Pizza from './components/Pizza';
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
      
    </div>
  );
};
export default App;