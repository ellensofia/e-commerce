import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";
import { MenuProvider } from "./assets/context/MenuContest.tsx";
import AboutPage from "./assets/pages/AboutPage.tsx";
import CategoriesPage from "./assets/pages/CategoriesPage.tsx";
import ContactPage from "./assets/pages/ContactPage.tsx";
import NotFound from "./assets/pages/NotFound.tsx";
import SalePage from "./assets/pages/SalePage.tsx";
import ShopPage from "./assets/pages/ShopPage.tsx";
import SingleProductPage from "./assets/pages/SingleProductPage.tsx";
import StartPage from "./assets/pages/StartPage.tsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<StartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/sale" element={<SalePage />} />
      <Route path="/shop/:id" element={<SingleProductPage />} />
      <Route path="/error" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MenuProvider>
      <RouterProvider router={router} />
    </MenuProvider>
  </React.StrictMode>
);
