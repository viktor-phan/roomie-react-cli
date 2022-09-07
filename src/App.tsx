import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import Main from "./views/main";
import NavBar from "./components/NavBar";
import Login from "./views/login";

import "./App.css";

const App = () => {
  const user = useSelector(selectUser);

  useEffect(() => {}, []);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
