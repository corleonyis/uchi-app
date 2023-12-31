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
  Select,
} from "@mantine/core";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { routesConfig } from "../routes/RouteConfig";
import { useAuthContext, logout } from "../features/auth/components/Auth";
import { useGroupContext } from "../features/group/components/GroupProvider";

type Props = {
  hidden: boolean;
};

// navbar menu
const menu = [
  routesConfig.home,
  routesConfig.buy_list,
  routesConfig.stock,
  routesConfig.group,
  routesConfig.settings,
];

export const UANavbar: React.FC<Props> = ({ hidden }) => {
  // navigate
  const navigate = useNavigate();
  const { currentUser } = useAuthContext();
  const { nameList, selectedName, onSelectedName } = useGroupContext();

  // Navbarのメニューアイテムを生成
  const menuItems = menu.map((item, index) => {
    return (
      <UnstyledButton
        key={index}
        p={10}
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
        <Stack>
          <Select
            label="表示中のグループ"
            placeholder="グループを選択してください"
            data={nameList}
            defaultValue={selectedName}
            allowDeselect={false}
            value={selectedName}
            onChange={onSelectedName}
          />
          {menuItems}
        </Stack>
      </Navbar.Section>

      <Divider my="sm" />

      {/* Footer */}
      <Navbar.Section>
        <Stack>
          <UnstyledButton
            p={10}
            onClick={() => {
              logout(navigate);
            }}
          >
            <Flex justify={"flex-start"} align={"center"} gap={"md"}>
              <Avatar src={currentUser?.photoURL} radius="xl" />
              <Text lineClamp={1} size={"sm"}>
                {currentUser?.name}
              </Text>
              <AiOutlineEllipsis style={{ marginLeft: "auto" }} size={24} />
            </Flex>
          </UnstyledButton>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};
