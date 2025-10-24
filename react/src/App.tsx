import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AuthLayout from "./AuthLayout";
import Login from "./Pages/auth/Login";
import SignUp from "./Pages/auth/SignUp";
import Dashboard from "./Pages/Dashboard";
import Ticket from "./Pages/Ticket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="tickets" element={<Ticket />} />
    </Routes>
  );
}

export default App;
