import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router";

interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!form.name) newErrors.name = "Full name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Please enter a valid email";

    if (!form.password) newErrors.password = "Password is required";
    if (!form.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fix the highlighted errors.");
      return;
    }

    // Mock signup
    localStorage.setItem("ticketapp_session", "mock_token");
    toast.success("Signup successful! Redirecting...");
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:ring-2 focus:ring-deep-blue outline-none`}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:ring-2 focus:ring-deep-blue outline-none`}
          placeholder="name@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm text-gray-600 mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:ring-2 focus:ring-deep-blue outline-none`}
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm text-gray-600 mb-1"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:ring-2 focus:ring-deep-blue outline-none`}
          placeholder="••••••••"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-deep-blue text-white py-2 rounded-lg hover:bg-blue-800 transition"
      >
        Sign Up
      </button>

      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <NavLink className="text-deep-blue font-semibold" to="/auth/login">
          Login
        </NavLink>
      </p>
    </form>
  );
};

export default Signup;
