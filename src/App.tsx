import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./store/features/productsSlice";
import { fetchCategories } from "./store/features/categorySlice";

import Main from "./components/Main/Main";
import Navbar from "./components/Navbar";
import { AppDispatch } from "./store/store";
import Footer from "./components/Footer/Footer";
import Clothes from "./components/Categories/Clothes/Clothes";
import Electronics from "./components/Categories/Electronics/Electronics";
import Furrniture from "./components/Categories/Furniture/Furniture";
import Shoes from "./components/Categories/Shoes/Shoes";
import Miscellaneous from "./components/Categories/Miscellaneous/Miscellaneous";
import CardProduct from "./components/Main/CardProducts/CardProduct/CardProduct";
import Favourites from "./components/Favourites/Favourites";
import Cart from "./components/Cart/Cart";
import UserForm from "./components/UserSignUpForm/UserForm";
import Profile from "./components/Profile/Profile";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <UserForm />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/furniture" element={<Furrniture />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/miscellaneous" element={<Miscellaneous />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog/:productId" element={<CardProduct />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
