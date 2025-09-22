import './App.css'
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import SampleFirstPage from "./pages/Categories/SampleFirstPage";
import SampleSecondPage from "./pages/Categories/SampleSecondPage";
import DashboardLayout from "./pages/Dashboard/HomeDashboard";
import Analytics from "./pages/Analytics/Analytics";
import Notifications from "./pages/Notifications/Notifications";
import SettingsPage from "./pages/Settings/Settings";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/page1" element={<SampleFirstPage />} />
        <Route path="/page2" element={<SampleSecondPage />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<SettingsPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
