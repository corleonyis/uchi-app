import React from "react";
import {
  Navbar,
  ScrollArea,
  Divider,
  Text,
  Avatar,
  Flex,
  UnstyledButton,
  Stack,
} from "@mantine/core";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuthContext, logout } from "../../auth/components/Auth";
import { routesConfig } from "./RouteConfig";

type Props = {
  hidden: boolean;
};

// navbar menu
const menu = [
  routesConfig.home,
  routesConfig.buy_list,
  routesConfig.stock,
  routesConfig.settings,
];

export const UANavbar: React.FC<Props> = ({ hidden }) => {
  // navigate
  const navigate = useNavigate();
  const { currentUser } = useAuthContext();

  const menuItems = menu.map((item, index) => {
    return (
      <UnstyledButton
        onClick={() => {
          navigate(item.href);
        }}
      >
        <Flex align={"center"} justify={"flex-start"} gap={"md"}>
          {item.icon}
          <Text size={"xl"}>{item.text}</Text>
        </Flex>
      </UnstyledButton>
    );
  });

  return (
    <Navbar
      p="md"
      width={{ sm: 200, lg: 300 }}
      hiddenBreakpoint="sm"
      hidden={hidden}
    >
      {/* Navbar Contents */}
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <Stack>{menuItems}</Stack>
      </Navbar.Section>

      <Divider my="sm" />

      {/* Footer */}
      <Navbar.Section>
        <Stack>
          <UnstyledButton
            onClick={() => {
              logout(navigate);
            }}
            style={{ width: "auto" }}
          >
            <Flex justify={"flex-start"} align={"center"} gap={"md"}>
              <Avatar src={currentUser?.photoURL} radius="xl" />
              <Text lineClamp={1} size={"sm"}>{currentUser?.displayName}</Text>
              <AiOutlineEllipsis style={{ marginLeft: "auto" }} size={24} />
            </Flex>
          </UnstyledButton>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};
