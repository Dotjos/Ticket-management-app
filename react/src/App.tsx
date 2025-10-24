import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AuthLayout from "./AuthLayout";
import Login from "./Pages/auth/Login";
import SignUp from "./Pages/auth/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="Auth" element={<AuthLayout />}>
        <Route path="Login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
