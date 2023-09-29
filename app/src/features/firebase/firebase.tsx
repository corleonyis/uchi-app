// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// export const useFirebase = () => {
//   const [app, setApp] = useState<FirebaseApp>()
//   const [initialized, setInitialized] = useState(false)

//   useEffect(() => {
//     if(initialized){
//       return
//     }

//     console.log("intialize app")
//     setApp(initializeApp(firebaseConfig))
//     setInitialized(true)
//   }, [initialized])

//   return app
// }

export const provider = new GoogleAuthProvider()
const auth = getAuth(app)
export default auth
// export const useFirebaseAuth = () => {
//   const [auth, setAuth] = useState<Auth>()
//   const [initialized, setInitialized] = useState(false)
//   const app = useFirebase()
  
//   useEffect(() => {
//     if(initialized){
//       return
//     }

//     console.log("intialize auth")
//     setAuth(getAuth(app))
//     setInitialized(true)
//   }, [initialized])

//   return auth
// }
