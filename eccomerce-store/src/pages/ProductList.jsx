import { useState } from "react";
import productsData from "../data/products.js"; // instead of .json

import ProductCard from "../components/ProductCard";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { FaSearch, FaFilter, FaBox } from "react-icons/fa";



const ProductList = () => {

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        console.log(product);

        dispatch(addToCart(product));
        toast.success("Item added to cart")
    };

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const categories = ["All", ...new Set(productsData.map(p => p.category))];

    const filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
    });



    return (
        <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
                <FaBox className="text-blue-600 text-2xl" />
                <h1 className="text-2xl font-bold">Products</h1>
            </div>


            {/* Search + Filter */}
            {/* Search + Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">

                {/* Search */}
                <div className="relative w-full md:w-1/2">
                    <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="pl-10 p-2 rounded w-full
      focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white
    "
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Category Filter */}
                <div className="relative w-full md:w-1/4">
                    <FaFilter className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
                    <select
                        className="
       pl-10 p-2 rounded w-full
      focus:outline-none focus:ring-2 focus:ring-blue-500
      bg-white cursor-pointer
    "
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

            </div>


            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
