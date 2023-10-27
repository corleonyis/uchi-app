import {
  Stack,
} from "@mantine/core";

// TODO: 一旦メンバー一覧ページとして残しておく。
export const Group: React.FC = () => {


  // Modal
  // const [opend, { open, close }] = useDisclosure(false);

  return (
    <Stack>
      メンバー一覧
      {/* <GroupModal opend={opend} close={close} createGroup={createGroup} />
      <Flex justify={"flex-start"} align={"end"} gap={"sm"}>
        <Text size={"lg"}>所属しているグループ</Text>
        <UnstyledButton style={{ marginLeft: "auto" }} onClick={open}>
          <Paper withBorder radius={10} p={5} color="undefined">
            <Text p={5}>新しいグループを作成</Text>
          </Paper>
        </UnstyledButton>
      </Flex>
      <Divider />
      <GroupItem items={group} /> */}
    </Stack>
  );
};
