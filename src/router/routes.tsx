import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import Home from "../components/pages/home/Home";
import ErrorPage from "../components/utils/ErrorPage";
import Products from "../components/pages/products/product/Products";
import ProductDetails from "../components/pages/products/product/ProductDetails";
import Cart from "../components/pages/Carts/Cart";
import Checkout from "../components/pages/Carts/Checkout";
import OrderSuccess from "../components/pages/Carts/OrderSuccess";
import ProductManagement from "../components/pages/ProductManagement/ProductManagement";
import Createproduct from "../components/pages/ProductManagement/Createproduct";
import AboutUs from "../components/pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products-management",
        element: <ProductManagement />,
      },
      {
        path: "/create-product",
        element: <Createproduct />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/my-cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/order-success",
        element: <OrderSuccess />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "*", // Catch-all route for 404 errors
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
