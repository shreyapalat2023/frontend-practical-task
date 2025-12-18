import { useNavigate } from "react-router";
import { FaStar, FaShoppingCart, FaTag } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="
        group bg-white rounded-2xl p-4
        shadow-sm hover:shadow-2xl
        transition-all duration-300
        hover:-translate-y-1
        cursor-pointer
        border
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl bg-gray-50">
        {/* Badge */}
        {product.discount && (
          <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <FaTag /> {product.discount}% OFF
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="
            h-44 w-full object-contain
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {/* Hover overlay */}
        <div
          className="
            absolute inset-0 bg-black/40
            opacity-0 group-hover:opacity-100
            transition flex items-center justify-center
          "
        >
          <span className="text-white font-semibold text-sm">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h2 className="font-semibold text-lg line-clamp-1">
          {product.name}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Price & Rating */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-xl font-bold text-blue-600">
            ₹{product.price}
          </span>

          <span className="flex items-center gap-1 text-sm text-yellow-500">
            <FaStar />
            {product.rating}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(product);
        }}
        className="
          mt-4 w-full flex items-center justify-center gap-2
          bg-gradient-to-r from-blue-600 to-indigo-600
          text-white py-2.5 rounded-xl
          font-semibold
          hover:from-blue-700 hover:to-indigo-700
          transition active:scale-95 cursor-pointer
        "
      >
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
