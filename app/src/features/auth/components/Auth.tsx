import {
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useLayoutEffect, useState } from "react";
import auth, { provider } from "../../firebase/firebase";
import { NavigateFunction } from "react-router-dom";
import { routesConfig } from "../../../routes/RouteConfig";
import { createUser, getUser } from "../../database/components/Database";
import { UserType } from "../../../components/Type";
import { GroupProvider } from "../../group/components/GroupProvider";

type AuthContextType = {
  currentUser: UserType | null;
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
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (user !== null) {
        setCurrentUser(await getUser(user.uid));
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      <GroupProvider>
        {!loading && children}
      </GroupProvider>
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
