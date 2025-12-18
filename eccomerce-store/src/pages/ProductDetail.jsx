import { useParams } from "react-router";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router";


const ProductDetail = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleAddToCart = (product) => {
        console.log("aded to cart", product);
        navigate("/cart")

        dispatch(addToCart(product));
    };

    const { id } = useParams();
    const product = productsData.find(p => p.id === Number(id));

    if (!product) {
        return <p className="p-4">Product not found</p>;
    }

    const relatedProducts = productsData.filter(
        p => p.category === product.category && p.id !== product.id
    );



    return (
        <div className="p-6">
            {/* Product Info */}
            <div className="grid md:grid-cols-2 gap-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-contain border rounded"
                />

                <div>
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-lg font-semibold mb-2">
                        Price: ₹{product.price}
                    </p>
                    <p className="mb-4">⭐ {product.rating}</p>

                    <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">
                    Related Products
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {relatedProducts.slice(0, 4).map(item => (
                        <ProductCard
                            key={item.id}
                            product={item}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
