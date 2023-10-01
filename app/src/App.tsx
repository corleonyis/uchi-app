import React from "react";
import { MantineProvider } from "@mantine/core";
import { AppRouter } from "./routes";
import { AuthProvider } from "./features/auth/components/Auth";

const App: React.FC = () => {
  return (
    <MantineProvider
      theme={{
        fontFamily: "'M PLUS 1p', sans-serif",
        components: {
          UnstyledButton: {
            styles: () => ({
              root: {
                backgroundColor: undefined,
                "&:hover": { backgroundColor: "rgba(128, 128, 128, 0.1)" },
                borderRadius: "50px",
              },
            }),
          },
        },
      }}
      withGlobalStyles
    >
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </MantineProvider>
  );
};

export default App;
