import {
  Text,
  Paper,
  SimpleGrid,
  Flex,
  Stack,
  Button,
  Divider,
} from "@mantine/core";
import { useState } from "react";
import { GroupItemType } from "../../../components/Type";

type GroupItemProps = {
  items: GroupItemType[];
};
const GroupItem: React.FC<GroupItemProps> = ({ items }) => {
  const element = items.map((item, index) => (
    <Paper shadow="xs" withBorder p={"xl"} key={index}>
      <Text>{item.name}</Text>
    </Paper>
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
  const [group, setGroup] = useState<GroupItemType[]>([
    { name: "Name is A" },
    { name: "Name is B" },
    { name: "Name is C" },
    { name: "Name is D" },
    { name: "Name is E" },
  ]);
  return (
    <Stack>
      <Flex justify={"flex-start"} align={"end"} gap={"md"}>
        <Text>グループ</Text>
        <Button variant="default" style={{ marginLeft: "auto" }}>
          新しいグループを作成・グループに参加
        </Button>
      </Flex>
      <Divider />
      <GroupItem items={group} />
    </Stack>
  );
};
