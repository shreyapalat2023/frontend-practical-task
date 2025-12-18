import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};

    if (!form.email) {
      err.email = "Email is required";
    }

    if (!form.password) {
      err.password = "Password is required";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) {
      toast.error("Please fix the errors");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      localStorage.setItem("user", JSON.stringify(storedUser));
      toast.success("Login successful");
      navigate("/checkout");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 max-w-sm w-full rounded-lg shadow-md bg-white">

      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

      {/* Email */}
      <div className="relative mb-3">
        <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
        <input
          className="border pl-10 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div className="relative mb-4">
        <FaLock className="absolute left-3 top-3 text-gray-400" />

        <input
          type={showPassword ? "text" : "password"}
          className="border pl-10 pr-10 p-2 w-full rounded 
               focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        {/* Show / Hide icon */}
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>

        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white w-full py-2 rounded-md
                   hover:bg-blue-700 transition font-semibold cursor-pointer"
      >
        Login
      </button>

      <p className="text-sm text-center mt-4 text-gray-600">
        Don’t have an account?
        <span
          onClick={() => navigate("/register")}
          className="text-blue-600 cursor-pointer ml-1 hover:underline"
        >
          Register
        </span>
      </p>
      </div>
    </div>
  );
};

export default Login;
