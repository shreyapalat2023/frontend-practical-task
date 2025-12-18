# 🛒 React E-Commerce Application

This is a simple **React-based e-commerce application** that includes product listing, product details, cart management, authentication, checkout flow, and order summary.
The project is built to demonstrate core React concepts, Redux state management, routing, and basic UI/UX practices.

---

## 🚀 Features

* Product Listing Page
* Product Detail Page
* Shopping Cart

  * Add to cart
  * Update quantity (+ / −)
  * Remove items
  * Cart summary (subtotal, tax, grand total)
* Authentication (Login & Register)
* Protected Checkout Route
* Checkout Form with Validation
* Order Success Flow
* Toast notifications for user feedback
* Persistent cart & user data using `localStorage`

---

## 🛠️ Tech Stack

* **React** (Vite)
* **Redux Toolkit**
* **React Router**
* **Tailwind CSS**
* **React Icons**
* **React Toastify**

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Application

```bash
npm run dev
```

The app will start on:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

* Users can **register** and **login**
* User data is stored in `localStorage`
* Checkout page is protected and accessible **only after login**
* Redirects are handled using `ProtectedRoute`

---

## 🛒 Cart Logic

* Cart state is managed using **Redux**
* Items can be added from:

  * Product Listing Page
  * Product Detail Page
* Cart data persists using `localStorage`
* On successful checkout:

  * Cart is cleared
  * User is redirected to success page

---

## 📚 Third-Party Dependencies

| Dependency         | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| `@reduxjs/toolkit` | Simplified and scalable state management         |
| `react-redux`      | Connects Redux store with React components       |
| `react-router-dom` | Client-side routing & protected routes           |
| `react-toastify`   | Toast notifications for success & error messages |
| `react-icons`      | Icons for better UI/UX                           |
| `tailwindcss`      | Utility-first CSS framework for fast styling     |

---

## 📂 Project Structure (Simplified)

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
    ├── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
    ├── EmptyCart.jsx
│   ├── Checkout.jsx
│   ├── Login.jsx
│   ├── Register.jsx
    ├── Success.jsx
├── redux/
│   ├── store.js
│   ├── cartSlice.js
├── routes/
│   ├── ProtectedRoute.jsx.
│   ├
├── App.jsx
├── main.jsx
```

---

## ✅ Future Enhancements (Optional)

* Backend integration (Node.js + MongoDB)
* Payment gateway integration
* User order history
* Admin dashboard
* Improved UI animations

---

## 👨‍💻 Author

Developed by **Shreya**
This project was created for learning and demonstration purposes.

---

## 📜 License

This project is for practical task and educational purposes only.

