import {
  Text,
  Paper,
  SimpleGrid,
  Flex,
  Stack,
  Divider,
  UnstyledButton,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { GroupItemType } from "../../../components/Type";
import { UAModal } from "../../../components/UAModal";
import { useDisclosure } from "@mantine/hooks";

// 所属グループの表示
type GroupItemProps = {
  items: GroupItemType[];
};
const GroupItem: React.FC<GroupItemProps> = ({ items }) => {
  const element = items.map((item, index) => (
    <Paper key={index} shadow="xs" withBorder radius={10} p={"xl"}>
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

// グループの操作に関するモーダル
type GroupModalProps = {
  opend: boolean,
  close: () => void
}
const GroupModal: React.FC<GroupModalProps> = ({opend, close}) => {
  return (
    <UAModal title="グループの新規作成" opened={opend} close={close}>
      <TextInput label="グループ名" />
    </UAModal>
  )
}

export const Group: React.FC = () => {
  const [group, setGroup] = useState<GroupItemType[]>([
    { name: "Name is A" },
    { name: "Name is B" },
    { name: "Name is C" },
    { name: "Name is D" },
    { name: "Name is E" },
  ]);

  const [opend, {open, close}] = useDisclosure(false)

  return (
    <Stack>
      <GroupModal opend={opend} close={close}/>
      <Flex justify={"flex-start"} align={"end"} gap={"sm"}>
        <Text size={"lg"}>グループ</Text>
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
