import React, { useState} from "react"; 
import { 
  AppShell,
  ScrollArea,
  useMantineTheme
} from "@mantine/core";
import { UANavbar } from "./UANavbar";
import { UAHeader } from "./UAHeader";

type Props = {
  children: React.ReactNode
}

export const UAAppShell: React.FC<Props> = ({children}) => {
  const theme = useMantineTheme()
  const [opend, setOpend] = useState(false)
  return(
    <AppShell
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
      padding="md"
      navbarOffsetBreakpoint="sm"
      header={<UAHeader opend={opend} onClickEvent={setOpend} color={theme.colors.gray[6]}/>}
      navbar={<UANavbar hidden={!opend}/>}

    >
      <ScrollArea.Autosize p="xs" type="never">
        {children}
      </ScrollArea.Autosize>
    </AppShell>
  )
}
