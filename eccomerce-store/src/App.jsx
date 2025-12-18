import {
  BrowserRouter, Routes,
  Route
} from "react-router";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckoutPage.jsx";
import Success from "./pages/Success";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login.jsx";
import Register from "./pages/RegisterPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
        <Navbar />

        <main
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "24px",
          }}
        >
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />

            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />

            <Route path="/success" element={<Success />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}


export default App;
