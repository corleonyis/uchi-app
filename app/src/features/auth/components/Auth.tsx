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
import { routesConfig } from "../../../routes/RouteConfig";
import { createUser } from "../../database/components/Database";

type AuthContextType = {
  currentUser: User | null;
};

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
});

export const useAuthContext = () => useContext(AuthContext);

// AuthProvider
type AuthProviderProps = {
  children: React.ReactNode;
};
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const login = (navigate: NavigateFunction) => {
  setPersistence(auth, browserLocalPersistence)
    .then(() => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential?.accessToken;
          // The signed-in user info.
          const user = result.user;
          createUser(user.uid, user.displayName, user.photoURL, () => {
            navigate(routesConfig.home.href);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logout = (navigate: NavigateFunction) => {
  auth?.signOut();
  navigate(routesConfig.login.href);
};
