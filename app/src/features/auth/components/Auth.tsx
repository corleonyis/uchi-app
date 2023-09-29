import {
  User,
  browserLocalPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../../firebase/firebase";
import { NavigateFunction } from "react-router-dom";

export type AuthContextType = {
  currentUser: User | null
  // login: () => Promise<void>
  login: (navigate: NavigateFunction) => void
  logout: (navigate: NavigateFunction) => void
  // debug: () => void
}

const AuthContext = createContext<AuthContextType>(
  {
    currentUser: null,
    login: () => {},
    logout: () => {}
    // debug: () => {}
  }
)

// export const useAuthContext = () => useContext(AuthContext)
export const useAuthContext = () => {
  const context = useContext(AuthContext)
  console.log(context)
  return context
}

// AuthProvider
type AuthProviderProps = {
  children: React.ReactNode;
};
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // const auth = useFirebaseAuth()
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const login = (navigate: NavigateFunction) => {
    // auth ? 
    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential?.accessToken;
          // The signed-in user info.
          auth.onAuthStateChanged((user) => {
            console.log(user)
            setCurrentUser(user);
            navigate("/lists/buy")  
          })
        })
      .catch((error) => {
        console.log(`signInWithPopUp: ${error}`)
      })
    }).catch((error) => {
      console.log(error)
    })
    // : console.log(" auth not initialized ")
  }

  const logout = (navigate: NavigateFunction) => {
    console.log(currentUser)
    auth?.signOut()
    navigate("/login")
  }

  const value = {
    currentUser,
    login,
    logout
  };

  useEffect(() => {
    // Firebase Authのメソッド。ログイン状態が変化すると呼び出される
    // auth?.onAuthStateChanged((user) => {
    //   console.log(user)
    // });
  }, [currentUser]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

//
// export const useAuth = () => {
//   const [currentUser, setUser] = useState<User | null>(null)
//   const auth = useFirebaseAuth()
//   // const navigate = useNavigate()

//   useEffect(() => {
//     return onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.dir(`login: ${user}`)
//         // console.dir(`login: ${auth.currentUser}`)
//         // console.log(`login: ${currentUser}`)
//         setUser(user)
//       } else {
//         console.log(`logout: ${currentUser}`)
//         setUser(null)
//       }
//     })
//   }, [])

//   const login = (navigate: NavigateFunction) => {
//     setPersistence(auth, browserLocalPersistence).then(() => {
//       signInWithPopup(auth, provider)
//         .then((result) => {
//           // This gives you a Google Access Token. You can use it to access the Google API.
//           // const credential = GoogleAuthProvider.credentialFromResult(result);
//           // const token = credential?.accessToken;
//           // The signed-in user info.
//           console.log(`signInWithRedirect: ${result}`)
//           navigate("/lists/buy")
//         })
//       .catch((error) => {
//         console.log(`signInWithRedirect: ${error}`)
//       })
//     }).catch((error) => {
//       console.log(error)
//     })
//   }

//   const logout = () => {
//     // auth.signOut()
//     // setUser(null)
//     // navigate("/login")
//     console.log(`debug: ${currentUser}`)
//   }

//   return {
//     currentUser,
//     login,
//     logout,
//   }
// }
