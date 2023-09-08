import React from "react";
import { MantineProvider } from "@mantine/core";
import { UAAppShell } from "../../../components/UAAppShell";

export const StockList: React.FC = () => {
  return(
    <MantineProvider>
      <UAAppShell>
        StockList
      </UAAppShell>
    </MantineProvider>
  )
}
