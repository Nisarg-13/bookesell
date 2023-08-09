import './App.css';
import './index.js';
import { Route, Routes, NavLink } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import { CssBaseline, useTheme } from '@material-ui/core';
import Home from './components/Home';
import { purple } from '@material-ui/core/colors';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer, toa } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Login from './components/Login';
import Header from './components/Header';
import { AuthProvider } from './contexts/auth';


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


  // const theme=useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
      <Header/>
      <ToastContainer />
      <CssBaseline />
      <Routes path='/'>
        <Route index element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      </AuthProvider>
    </ThemeProvider>

  );
}

export default App;