import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Checkout from "./Component/Cart/Checkout";
import Productlist from "./Component/productlist/Productlist";
import Allproduct from "./Pages/Allproduct";
import Mainnavigation from "./Component/Header/Mainnavigation";
import Signup from "./Component/User/Signup";
import Placeorder from "./Component/Placeorder/Placeorder";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainnavigation />,
      children: [
        { index: true, element: <Allproduct /> },
        { path: "data/:category/product/:id", element: <Productlist /> },
        { path: "data/:category", element: <Allproduct /> },
        { path: "/:category/:id", element: <Productlist /> },
      ],
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    { path: "signup", element: <Signup /> },
    { path: "placehorder", element: <Placeorder /> },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
