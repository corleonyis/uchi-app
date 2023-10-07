import {
  Text,
  Paper,
  SimpleGrid,
  Flex,
  Stack,
  Divider,
  UnstyledButton,
} from "@mantine/core";
import { useState } from "react";
import { GroupItemType } from "../../../components/Type";
import { useDisclosure } from "@mantine/hooks";
import { GroupModal } from "./GroupModal";
import { useAuthContext } from "../../auth/components/Auth";
import { AiOutlineEdit } from "react-icons/ai";

// 所属グループの表示
type GroupItemProps = {
  items: GroupItemType[];
};
const GroupItem: React.FC<GroupItemProps> = ({ items }) => {
  const { currentUser } = useAuthContext();
  const element = items.map((item, index) => (
    <UnstyledButton>
      <Paper key={index} shadow="xs" withBorder radius={10} p={"sm"}>
        <Flex justify={"flex-start"} align={"start"}>
          <Text>{item.name}</Text>
          {item.owner.id === currentUser?.uid ? (
            <AiOutlineEdit style={{ marginLeft: "auto" }} />
          ) : (
            <></>
          )}
        </Flex>
        <Flex justify={"flex-end"} align={"end"}>
          <Text size={"sm"}>作成者: {item.owner.name || "不明"}</Text>
        </Flex>
      </Paper>
    </UnstyledButton>
  ));

  return items.length > 0 ? (
    <SimpleGrid
      breakpoints={[
        { maxWidth: "md", cols: 1, spacing: "md", verticalSpacing: "md" },
      ]}
      cols={4}
      spacing={"md"}
      verticalSpacing={"md"}
    >
      {element}
    </SimpleGrid>
  ) : (
    <Flex justify={"center"} align={"center"}>
      <Text>所属しているグループはまだありません</Text>
    </Flex>
  );
};

export const Group: React.FC = () => {
  const { currentUser } = useAuthContext();
  const [group, setGroup] = useState<GroupItemType[]>([]);
  const createGroup = (name: string) => {
    setGroup((prevItems) => {
      return [
        ...prevItems,
        {
          name: name,
          owner: { name: currentUser?.displayName, id: currentUser?.uid },
          member: [],
        },
      ];
    });
  };

  const [opend, { open, close }] = useDisclosure(false);

  return (
    <Stack>
      <GroupModal opend={opend} close={close} createGroup={createGroup} />
      <Flex justify={"flex-start"} align={"end"} gap={"sm"}>
        <Text size={"lg"}>所属しているグループ</Text>
        <UnstyledButton style={{ marginLeft: "auto" }} onClick={open}>
          <Paper withBorder radius={10} p={5} color="undefined">
            <Text p={5}>新しいグループを作成</Text>
          </Paper>
        </UnstyledButton>
      </Flex>
      <Divider />
      <GroupItem items={group} />
    </Stack>
  );
};
