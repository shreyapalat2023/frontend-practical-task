import { FaCheckCircle, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mt-2">
          Thank you for shopping with us. Your order is being processed.
        </p>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Action Button */}
        <button
          onClick={() => navigate("/")}
          className="
            flex items-center justify-center gap-2
            w-full bg-green-600 text-white
            py-3 rounded-lg font-semibold
            hover:bg-green-700 transition
            active:scale-95 cursor-pointer
          "
        >
          <FaShoppingBag />
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Success;
