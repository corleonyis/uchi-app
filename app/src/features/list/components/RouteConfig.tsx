import { AiOutlineHome, AiOutlineShopping, AiOutlineInbox, AiOutlineSetting } from "react-icons/ai";
import { Login } from "../../auth/routes/Login";
import { Home } from "../routes/Home";
import { Settings } from "../routes/Settings";
import { ShoppingList } from "../routes/ShoppingList";
import { StockList } from "../routes/StockList";

export const routesConfig = {
  login: { text: "ログイン", href: "/login", icon: null, element: <Login /> },
  home: {
    text: "ホーム",
    href: "/home",
    icon: <AiOutlineHome size={24}/>,
    element: <Home />,
  },
  buy_list: {
    text: "買い物リスト",
    href: "/buy_list",
    icon: <AiOutlineShopping size={24}/>,
    element: <ShoppingList />,
  },
  stock: {
    text: "ストック",
    href: "/stock",
    icon: <AiOutlineInbox size={24}/>,
    element: <StockList />,
  },
  settings: {
    text: "設定",
    href: "/settings",
    icon: <AiOutlineSetting size={24}/>,
    element: <Settings />,
  },
};