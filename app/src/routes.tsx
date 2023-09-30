import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./features/auth/routes/Login";
import { ShoppingList } from "./features/list/routes/ShoppingList";
import { StockList } from "./features/list/routes/StockList";
import { Settings } from "./features/list/routes/Settings";
import { Calendar } from "./features/list/routes/Calendar";
import { UAAppShell } from "./components/UAAppShell";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<UAAppShell />}>
          <Route path="/lists/buy" element={<ShoppingList />} />
          <Route path="/lists/stock" element={<StockList />} />
          <Route path="/setting/category" element={<Settings />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
