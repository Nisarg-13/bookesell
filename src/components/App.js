import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Welcome from './Welcome';
import User from './User';
import Home from './Home';
import { purple } from '@material-ui/core/colors';
import { createTheme ,ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      // main: purple[500],
      light: "#ff4081",
      main: purple[500],
      dark: "#c51162",
      contrastText: "#fff"
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
    typography: {
      h1: {
        fontWeight: 300,
        fontSize: "6rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
        color:"#ff4081 !important"
      }
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>

      <div>
        <div style={
          {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            background: 'linear-gradient(120deg,pink,rgb(193, 132, 250))',
            height: 70
          }
        }>

            <NavLink to='/'> HOME </NavLink><br />
            <NavLink to='/welcome'> WELCOME </NavLink><br />
            <NavLink to='/user'> USER </NavLink>
        </div>

        <Routes>
          <Route index element={<Home/>} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/user' element={<User name="Nisarg" role="student" />} />
        </Routes>
      </div>
    </ThemeProvider>

  );
}

export default App;