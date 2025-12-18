import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";



const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};

    if (!form.name.trim()) {
      err.name = "Name is required";
    }

    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Enter a valid email";
    }

    if (!form.password) {
      err.password = "Password is required";
    } else if (form.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors");
      return;
    }

    localStorage.setItem("registeredUser", JSON.stringify(form));
    toast.success("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 max-w-sm w-full rounded-lg shadow-md bg-white">

        <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>

        {/* Name */}
        <div className="relative mb-3">
          <FaUser className="absolute left-3 top-3 text-gray-400" />
          <input
            className="border pl-10 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="relative mb-3">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            className="border pl-10 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
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
          onClick={handleRegister}
          className="bg-green-600 text-white w-full py-2 rounded-md
                 hover:bg-green-700 transition font-semibold"
        >
          Register
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="text-green-600 cursor-pointer ml-1 hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>

  );
};

export default Register;
