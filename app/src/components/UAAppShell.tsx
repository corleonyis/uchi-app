import React, { useState } from "react";
import { AppShell, ScrollArea, useMantineTheme } from "@mantine/core";
import { UANavbar } from "./UANavbar";
import { UAHeader } from "./UAHeader";
import { useAuthContext } from "../features/auth/components/Auth";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { routesConfig } from "../routes/RouteConfig";

export const UAAppShell: React.FC = () => {
  const { currentUser } = useAuthContext();
  const theme = useMantineTheme();
  const [opend, setOpend] = useState(false);

  return currentUser ? (
    <AppShell
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      padding="md"
      navbarOffsetBreakpoint="sm"
      header={
        <UAHeader
          opend={opend}
          onClickEvent={setOpend}
          color={theme.colors.gray[6]}
        />
      }
      navbar={<UANavbar hidden={!opend} />}
    >
      <ScrollArea.Autosize p="xs" type="never">
        <Outlet />
      </ScrollArea.Autosize>
    </AppShell>
  ) : (
    <Navigate to={routesConfig.login.href} />
  );
};
