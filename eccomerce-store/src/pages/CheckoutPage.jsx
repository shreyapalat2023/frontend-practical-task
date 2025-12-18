import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaRupeeSign
} from "react-icons/fa";



const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const validate = () => {
    let err = {};
    if (!form.name) err.name = "Name required";
    if (!/^\d{10}$/.test(form.phone)) err.phone = "Valid phone required";
    if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Valid email required";
    if (!form.address) err.address = "Address required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(clearCart());
    toast.success("Order placed successfully!");
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">

        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaShoppingBag className="text-green-600" />
            Checkout Details
          </h2>

          {/* Name */}
          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              placeholder="Full Name"
              className="border pl-10 p-2 w-full rounded focus:ring-2 focus:ring-green-500 outline-none"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="relative mb-4">
            <FaPhone className="absolute left-3 top-3 text-gray-400" />
            <input
              placeholder="Phone Number"
              className="border pl-10 p-2 w-full rounded focus:ring-2 focus:ring-green-500 outline-none"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              placeholder="Email Address"
              className="border pl-10 p-2 w-full rounded focus:ring-2 focus:ring-green-500 outline-none"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Address */}
          <div className="relative mb-4">
            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
            <textarea
              placeholder="Delivery Address"
              className="border pl-10 p-2 w-full rounded focus:ring-2 focus:ring-green-500 outline-none"
              rows={3}
              value={form.address}
              onChange={e => setForm({ ...form, address: e.target.value })}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold
                       hover:bg-green-700 transition cursor-pointer"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-3 text-sm">
              <span>{item.name} × {item.quantity}</span>
              <span className="flex items-center gap-1">
                <FaRupeeSign size={12} />
                {item.price * item.quantity}
              </span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Tax (5%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-green-600">₹{total.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

