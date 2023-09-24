import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { SignUp } from "./features/auth/routes/SingUp";
import { Login } from "./features/auth/routes/Login";
import { ShoppingList } from "./features/list/routes/ShoppingList";
import { StockList } from "./features/list/routes/StockList";
import { Settings } from "./features/list/routes/Settings";
import { Calendar } from "./features/list/routes/Calendar";

export const router = createBrowserRouter([
  // {path: "/", element: <App/>},
  {path: "ShoppingList", element: <ShoppingList/>},
  {path: "StockList", element: <StockList/>},
  {path: "Setting/Category", element: <Settings/>},
  {path: "Calendar", element: <Calendar/>},
  {path: "login", element: <Login/>},
  {path: "SignUp", element: <SignUp/>}
])