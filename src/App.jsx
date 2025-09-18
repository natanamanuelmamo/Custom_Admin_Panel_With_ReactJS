import './App.css'
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import SampleFirstPage from "./pages/Categories/SampleFirstPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/page1" element={<SampleFirstPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
