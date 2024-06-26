import Home from "../components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContent from "../components/Cart/CartContent";
import DataProvider from "../components/DataContext";
import ProductsPage from "../components/ProductsPage";
import Contact from "../components/Contact";
import LoginRoutes from "../components/Log/Login";
import { AuthProvider } from "../components/Log/context/AuthContext";
import Register from "../components/Log/Register";
import ProductsComponent from "../components/ProductsComponent";
import DetailsItem from "../components/DetailsItem";

function RoutesConfig() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginRoutes />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<CartContent />} />
            <Route exact path="/" component={<ProductsComponent/>} />
        <Route path="/product/:id" component={<DetailsItem/>} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

export default RoutesConfig;
