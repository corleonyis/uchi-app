import {
  User,
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useLayoutEffect, useState } from "react";
import auth, { provider } from "../../firebase/firebase";
import { NavigateFunction } from "react-router-dom";

type AuthContextType = {
  currentUser: User | null
  login: (navigate: NavigateFunction) => void
  logout: (navigate: NavigateFunction) => void
}

const AuthContext = createContext<AuthContextType>(
  {
    currentUser: null,
    login: () => {},
    logout: () => {}
  }
)

export const useAuthContext = () => useContext(AuthContext)

// AuthProvider
type AuthProviderProps = {
  children: React.ReactNode;
};
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })  
  }, [])
  
  const login = (navigate: NavigateFunction) => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential?.accessToken;
          // The signed-in user info.
          navigate("/lists/buy")  
        })
      .catch((error) => {
        console.log(error)
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  const logout = (navigate: NavigateFunction) => {
    auth?.signOut()
    navigate("/login")
  }

  const value = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
