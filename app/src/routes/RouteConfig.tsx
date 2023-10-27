import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineInbox,
  AiOutlineSetting,
  AiOutlineTeam,
} from "react-icons/ai";
import { Login } from "../features/auth/routes/Login";
import { Home } from "./Home";
import { Settings } from "./Settings";
import { ShoppingList } from "./ShoppingList";
import { StockList } from "./StockList";
import { Group } from "../features/group/routes/Group";

export const routesConfig = {
  login: { text: "ログイン", href: "/login", icon: null, element: <Login /> },
  home: {
    text: "ホーム",
    href: "/home",
    icon: <AiOutlineHome size={24} />,
    element: <Home />,
  },
  buy_list: {
    text: "買い物リスト",
    href: "/buy_list",
    icon: <AiOutlineShopping size={24} />,
    element: <ShoppingList />,
  },
  stock: {
    text: "ストック",
    href: "/stock",
    icon: <AiOutlineInbox size={24} />,
    element: <StockList />,
  },
  group: {
    text: "メンバー",
    href: "/members",
    icon: <AiOutlineTeam size={24} />,
    element: <Group />,
  },
  settings: {
    text: "設定",
    href: "/settings",
    icon: <AiOutlineSetting size={24} />,
    element: <Settings />,
  },
};
