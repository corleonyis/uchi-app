import React from "react";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AuthContext, useAuth } from "./features/auth/components/Auth";

const App: React.FC = () => {
  const auth = useAuth()

  return (
    <MantineProvider>
      <AuthContext.Provider value={ auth }>
        <RouterProvider router={router}/>
      </AuthContext.Provider>
    </MantineProvider>
  )
}

export default App
