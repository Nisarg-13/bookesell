import "./App.css";
import { Home, User } from "./User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./components/profile/Profile";

function App() {
  // const array = [10, 20, 30, 40, 50];

  const userName = "Nisarg";
  return (
    <BrowserRouter>
      <div className="App">
        <header> This is header </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User name={userName} age={20} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <footer> This is footer </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
