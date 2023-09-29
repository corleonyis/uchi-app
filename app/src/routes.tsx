import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { Login } from "./features/auth/routes/Login";
import { ShoppingList } from "./features/list/routes/ShoppingList";
import { StockList } from "./features/list/routes/StockList";
import { Settings } from "./features/list/routes/Settings";
import { Calendar } from "./features/list/routes/Calendar";

export const router = createBrowserRouter([
  { path: "/", element: <ShoppingList /> },
  { path: "lists/buy", element: <ShoppingList /> },
  { path: "lists/stock", element: <StockList /> },
  { path: "setting/category", element: <Settings /> },
  { path: "calendar", element: <Calendar /> },
  { path: "login", element: <Login /> },
]);

// export interface AuthRouteProps {
//   children: React.ReactNode;
//   routeProps: RouteProps;
// }

// export const AuthRoute: React.FC<AuthRouteProps> = ({ children, ...rest }) => {
//   const { currentUser: user } = useAuthContext();

//   return (
//     <Route {...rest}>{user ? children : <Navigate to={"/login"} />}</Route>
//   );
// };
