import { UnstyledButton, Paper, Flex, SimpleGrid, Text } from "@mantine/core";
import { AiOutlineEdit } from "react-icons/ai";
import { GroupItemType } from "../../../components/Type";
import { useAuthContext } from "../../auth/components/Auth";

// 所属グループの表示
type GroupItemProps = {
  items: GroupItemType[];
};
export const GroupItem: React.FC<GroupItemProps> = ({ items }) => {
  const { currentUser } = useAuthContext();
  const element = items.map((item, index) => (
    <UnstyledButton key={index}>
      <Paper shadow="xs" withBorder radius={10} p={"sm"}>
        <Flex justify={"flex-start"} align={"start"}>
          <Text>{item.name}</Text>
          {item.owner.id === currentUser?.id ? (
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
