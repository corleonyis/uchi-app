import { User } from "firebase/auth";
import { createContext } from "react";

export type AuthContextType = {
  user: User | null,
  setUser: (user: User | null) => void
}
export const AuthContext = createContext<AuthContextType>({} as AuthContextType)
