import './App.css'
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import SampleFirstPage from "./pages/Categories/SampleFirstPage";
import Notifications from "./pages/Notifications/Notifications";
import DashboardLayout from "./pages/Dashboard/HomeDashboard";
import Analytics from "./pages/Analytics/Analytics"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/page1" element={<SampleFirstPage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/Analytics" element={<Analytics />} />
        
      </Routes>
    </Router>
  );
}

export default App;
