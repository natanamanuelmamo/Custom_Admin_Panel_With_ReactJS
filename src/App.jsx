import './App.css'
import SignIn from "./pages/Auth/SignIn";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        
      </Routes>
    </Router>
  );
}

export default App;
