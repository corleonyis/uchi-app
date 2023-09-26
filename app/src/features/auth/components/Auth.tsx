import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";

export type AuthContextType = {
  user: User | null,
}

const defaultContext: AuthContextType = {
  user: null,
}

export const AuthContext = createContext<AuthContextType>(defaultContext)

export const useAuthContext = () => {
  return useContext(AuthContext)
}


export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user)
      }else{
        setUser(null)
      }
    })
  }, [])

  return {
    user
  }
}