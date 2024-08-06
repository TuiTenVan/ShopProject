import LayoutAdmin from "../components/Layout/LayoutAdmin";
import LayoutDefault from "../components/Layout/LayoutDefault";
import PrivateRoutes from "../components/PrivateRoutes";
import About from "../page/About";
import Blogs from "../page/Blog";
import BlogDetail from "../page/BlogDetail";
import Cart from "../page/Cart";
import Contact from "../page/Contact";
import Dashboard from "../page/Dashboard";
import Home from "../page/Home";
import Login from "../page/Login";
import ProductDetail from "../page/ProductDetail";
import Register from "../page/Register";
import Shop from "../page/Shop";
import UserManager from "../page/UserManager/UserManager";
import CreateUser from "../page/UserManager/CreateUser";
import ProductManager from "../page/ProductManager/ProductManager";
import ProductDetailAdmin from "../page/ProductManager/ProductDetailAdmin";
import CreateProduct from "../page/ProductManager/CreateProduct";

export const routes = [
  // Public
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "product-detail",
        element: <ProductDetail />
      },
      {
        path: "blogs",
        element: <Blogs />
      },
      {
        path: "blog-details",
        element: <BlogDetail />
      },
    ],
  },

  // Admin routes
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <LayoutAdmin />,
        children: [
          {
            path: "admin",
            element: <Dashboard />,
          },
          {
            path: "user-manager",     
            element: <UserManager/>
          },
          {
            path: "create-user",
            element: <CreateUser/>
          },
          {
            path: "product-manager",
            element: <ProductManager/>
          },
          {
            path: "product-detail-admin/:id",
            element: <ProductDetailAdmin />
          },
          {
            path: "create-product",
            element: <CreateProduct/>
          }
        ],
      },
    ],
  },
];