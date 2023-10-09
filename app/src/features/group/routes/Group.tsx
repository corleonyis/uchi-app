import {
  Text,
  Paper,
  Flex,
  Stack,
  Divider,
  UnstyledButton,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { GroupItemType } from "../../../components/Type";
import { useDisclosure } from "@mantine/hooks";
import { GroupModal } from "../components/GroupModal";
import { useAuthContext } from "../../auth/components/Auth";
import {
  createGroup as addGroup,
  getGroups,
} from "../../database/components/Database";
import { GroupItem } from "../components/GroupItem";

export const Group: React.FC = () => {
  const { currentUser } = useAuthContext();
  const [group, setGroup] = useState<GroupItemType[]>([]);
  const [request, setRequest] = useState(true);

  // グループ取得
  useEffect(() => {
    if (request) {
      console.log("useEffect")
      getGroups(currentUser?.id as string, currentUser?.name as string)
        .then((docs) => {
          setGroup(docs);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return () => {
      setRequest(false);
    };
  }, [request, currentUser?.id, currentUser?.name]);

  // グループ作成
  const createGroup = (name: string) => {
    if (currentUser !== null && name !== "") {
      addGroup(name, currentUser?.id, currentUser?.name);
      setRequest(true);
    }
  };

  // Modal
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
