import React from "react";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AuthProvider } from "./features/auth/components/Auth";
// import { app } from "./features/firebase/firebase";

const App: React.FC = () => {
  // const auth = useAuth()
  // console.log(app)

  return (
    <MantineProvider>
      <AuthProvider>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/lists/buy" element={<ShoppingList/>}/>
        </Routes>
        </BrowserRouter> */}
        <RouterProvider router={router}/>
      </AuthProvider>
    </MantineProvider>
  )
}

export default App
