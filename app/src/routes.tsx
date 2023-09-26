import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./features/auth/routes/Login";
import { ShoppingList } from "./features/list/routes/ShoppingList";
import { StockList } from "./features/list/routes/StockList";
import { Settings } from "./features/list/routes/Settings";
import { Calendar } from "./features/list/routes/Calendar";

export const router = createBrowserRouter([
  // {path: "/", element: <App/>},
  { path: "lists/buy", element: <ShoppingList /> },
  { path: "lists/stock", element: <StockList /> },
  { path: "setting/category", element: <Settings /> },
  { path: "calendar", element: <Calendar /> },
  { path: "login", element: <Login /> },
]);
