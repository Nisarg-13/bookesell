import './App.css';
import './index.js';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import { CssBaseline } from '@material-ui/core';
import Home from './components/Home';
import { purple } from '@material-ui/core/colors';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Login from './components/Login';
import Header from './components/Header';
import { AuthProvider } from './contexts/auth';
import { CartProvider } from './contexts/cartContext';
import EditBook from './components/EditBook';
import ProductPage from './components/ProductPage';
import Users from './components/Users';
import EditUser from './components/EditUser';
import Category from './components/categoty';
import EditCategory from './components/EditCategory';
import Cart from './components/Cart';
import { Component } from 'react';
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      light: "#ff4081",
      main: purple[600],
      dark: "#c51162",
      contrastText: "#fff"
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
  typography: {
    fontFamily: 'Fira Sans',
    fontSize: 15,
    h1: {
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      color: "#ff4081 !important",
    },

  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
      <CartProvider>  
      <Header/>
      <ToastContainer />
      <CssBaseline />
      <Routes path='/'>
        <Route index element={<Home />} />
        {/* <Route path='/welcome' element={<Welcome />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/editBook/:id' element={<EditBook />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/add-book' element={<EditBook />} />
        <Route path='/users' element={<Users />} />
        <Route path='/editUser/:id' element={<EditUser />} />
        <Route path='/category' element={<Category />} />
        <Route path='/editCategory/:id' element={<EditCategory />} />
        <Route path='/add-category' element={<EditCategory />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>

      </CartProvider>
      </AuthProvider>
    </ThemeProvider>

  );
  
}

export default App; 
