import React from "react";
import { MantineProvider } from "@mantine/core";
import { UAAppShell } from "../../../components/UAAppShell";

export const Calendar: React.FC = () => {
  return(
    <MantineProvider>
      <UAAppShell>
        Calendar
      </UAAppShell>
    </MantineProvider>
  )
}
