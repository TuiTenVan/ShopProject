import LayoutDefault from "../components/Layout/LayoutDefault";
import About from "../page/About";
import Blogs from "../page/Blog";
import BlogDetail from "../page/BlogDetail";
import Cart from "../page/Cart";
import Contact from "../page/Contact";
import Home from "../page/Home";
import Login from "../page/Login";
import ProductDetail from "../page/ProductDetail";
import Register from "../page/Register";
import Shop from "../page/Shop";


export const routes = [
  // Public
  {
    path: "/",
    element: <LayoutDefault/>,
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
        element: <Contact/>
      },
      {
        path: "login",     
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "shop",
        element: <Shop/>
      },
      {
        path: "product-detail",
        element: <ProductDetail/>
      },
      {
        path: "blogs",
        element: <Blogs/>
      },
      {
        path: "blog-details",
        element: <BlogDetail/>
      }
    ]
  
  },

  //Route Private
  // {
  //   element: <PrivateRoutes />,
  //   children: [
  //     {
  //       element: <LayoutAdmin />,
  //       children: [
  //         {
  //           path: "admin",
  //           element: <Dashboard />,
  //         },
  //         {
  //           path: "info-company",
  //           element: <InfoCompany />,
  //         },
  //         {
  //           path: "job-manage",
  //           element: <JobManage />,
  //         },
  //         {
  //           path: "create-job",
  //           element: <CreateJob />,
  //         },
  //         {
  //           path: "detail-job/:id",
  //           element: <JobDetailAdmin />,
  //         },
  //         {
  //           path: "cv-manage",
  //           element: <CVManage />,
  //         },
  //         {
  //           path: "detail-cv/:id",
  //           element: <CVDetail />,
  //         },
  //       ],
  //     },
  //   ],
  // },
];
