import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AuthLayout from "./AuthLayout";
import Login from "./Pages/auth/Login";
import SignUp from "./Pages/auth/SignUp";
import Dashboard from "./Pages/Dashboard";
import Ticket from "./Pages/Ticket";
import ProtectedRoute from "./routes/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="tickets"
        element={
          <ProtectedRoute>
            <Ticket />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
