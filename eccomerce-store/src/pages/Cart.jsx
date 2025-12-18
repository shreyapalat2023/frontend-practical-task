import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
    increaseQty,
    decreaseQty,
    removeFromCart
} from "../redux/cartSlice";
import EmptyCart from "./EmptyCart.jsx";
import {
    FaPlus,
    FaMinus,
    FaTrash,
    FaShoppingCart,
    FaRupeeSign
  } from "react-icons/fa";
  


  const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const cartItems = useSelector(state => state.cart.items);
  
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
  
    if (cartItems.length === 0) return <EmptyCart />;
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
  
          {/* Header */}
          <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FaShoppingCart className="text-green-600" />
            Shopping Cart
          </h1>
  
          <div className="grid md:grid-cols-3 gap-6">
  
            {/* Cart Items */}
            <div className="md:col-span-2 bg-white rounded-xl shadow-md">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 border-b last:border-none"
                >
                  {/* Product Info */}
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <FaRupeeSign size={12} />
                      {item.price}
                    </p>
  
                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="p-1 border rounded hover:bg-gray-100 cursor-pointer"
                      >
                        <FaMinus size={12} />
                      </button>
  
                      <span className="font-semibold">{item.quantity}</span>
  
                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="p-1 border rounded hover:bg-gray-100 cursor-pointer"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </div>
  
                  {/* Price & Remove */}
                  <div className="text-right">
                    <p className="font-bold text-lg">
                      ₹{item.price * item.quantity}
                    </p>
  
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="flex items-center gap-1 text-red-500 hover:text-red-600 mt-2 text-sm cursor-pointer"
                    >
                      <FaTrash />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Summary */}
            <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
  
              <div className="space-y-2 text-sm">
                <p className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </p>
                <p className="flex justify-between">
                  <span>Tax (5%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </p>
                <hr />
                <p className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-green-600">₹{total.toFixed(2)}</span>
                </p>
              </div>
  
              <button
                onClick={() => navigate("/checkout")}
                className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg
                           hover:bg-green-700 transition font-semibold cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;
  
