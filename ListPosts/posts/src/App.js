import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Crud from "./Crud";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </Router>
  );
}

export default App;
