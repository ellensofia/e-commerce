import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";
import { ProductContext } from "./assets/contexts/ProductContext.tsx";
import AboutPage from "./assets/pages/AboutPage.tsx";
import ContactPage from "./assets/pages/ContactPage.tsx";
import ShopPage from "./assets/pages/ShopPage.tsx";
import SingleProductPage from "./assets/pages/SingleProductPage.tsx";
import StartPage from "./assets/pages/StartPage.tsx";
import { products } from "./data.ts";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<StartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/shop/:id" element={<SingleProductPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductContext.Provider value={products}>
      <RouterProvider router={router} />
    </ProductContext.Provider>
  </React.StrictMode>
);
