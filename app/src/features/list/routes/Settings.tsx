import React from "react";
import { MantineProvider } from "@mantine/core";
import { UAAppShell } from "../../../components/UAAppShell";

export const Settings: React.FC = () => {
  return(
    <MantineProvider>
      <UAAppShell>
        Settings
      </UAAppShell>
    </MantineProvider>
  )
}
