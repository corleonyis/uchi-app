import React from "react";
// import "./App.css";
import { MantineProvider } from "@mantine/core";
import { AppRouter } from "./routes";
import { AuthProvider } from "./features/auth/components/Auth";

const App: React.FC = () => {
  return (
    <MantineProvider
      theme={{fontFamily: "'M PLUS 1p', sans-serif"}}
      withGlobalStyles
    >
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </MantineProvider>
  );
};

export default App;
