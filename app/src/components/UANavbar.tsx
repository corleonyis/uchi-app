import React from "react";
import { Navbar } from "@mantine/core";

type Props = {
  hidden: boolean
}

export const UANavbar: React.FC<Props> = ({hidden}) => {
  return(
    <Navbar p="md" width={{sm: 200, lg: 300}} hiddenBreakpoint="sm" hidden={hidden}>
      Application Navbar
    </Navbar>
  )
}
