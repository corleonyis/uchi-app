import React from "react";
import { MantineProvider } from "@mantine/core";
import { UAAppShell } from "../../../components/UAAppShell";

export const ShoppingList: React.FC = () => {
  return(
    <MantineProvider>
      <UAAppShell>
        ShoppingList
      </UAAppShell>
    </MantineProvider>
  )
}
