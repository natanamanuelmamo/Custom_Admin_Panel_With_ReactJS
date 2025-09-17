import './App.css'
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </Router>
  );
}

export default App;
