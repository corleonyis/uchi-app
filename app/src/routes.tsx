import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { UAAppShell } from "./features/list/components/UAAppShell";
import { routesConfig } from "./features/list/components/RouteConfig";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routesConfig.login.href}
          element={routesConfig.login.element}
        />
        <Route path="/" element={<UAAppShell />}>
          <Route index element={<Navigate to={routesConfig.home.href} />} />
          <Route
            path={routesConfig.home.href}
            element={routesConfig.home.element}
          />
          <Route
            path={routesConfig.buy_list.href}
            element={routesConfig.buy_list.element}
          />
          <Route
            path={routesConfig.stock.href}
            element={routesConfig.stock.element}
          />
          <Route
            path={routesConfig.settings.href}
            element={routesConfig.settings.element}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
