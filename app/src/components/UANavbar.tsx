import React from "react";
import { Navbar, ScrollArea, Divider, Text, Avatar, Flex } from "@mantine/core";

type Props = {
  hidden: boolean
}

export const UANavbar: React.FC<Props> = ({hidden}) => {
  return(
    <Navbar p="md" width={{sm: 200, lg: 300}} hiddenBreakpoint="sm" hidden={hidden}>
      
      {/* Navbar Contents */}
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <Text>Shopping List</Text>
        <Text>Stock List</Text>
        <Text>Calendar</Text>
        <Text>Settings</Text>
      </Navbar.Section>

      <Divider my="sm"/>
      
      {/* Footer */}
      <Navbar.Section> 
        <Flex align="center" gap="md">
          <Avatar src={null} radius="xl"/>
          <Text> User Name </Text>
        </Flex>
      </Navbar.Section>
    </Navbar>
  )
}
