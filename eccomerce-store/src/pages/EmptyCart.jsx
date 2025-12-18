

import { useNavigate } from "react-router";
import { MdOutlineShoppingCart } from "react-icons/md";
const EmptyCart = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col items-center justify-center py-20 text-center">
            <MdOutlineShoppingCart className="text-7xl text-gray-400 mb-4" />

                <h2 className="text-2xl font-semibold text-gray-700">
                    Your cart is empty
                </h2>

                <p className="text-gray-500 mt-2 mb-6">
                    Looks like you haven’t added anything to your cart yet.
                </p>

                <button
                    onClick={() => navigate("/")}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md
               hover:bg-blue-700 transition cursor-pointer"
                >
                    Continue Shopping
                </button>
            </div>

        </>
    )
}
export default EmptyCart