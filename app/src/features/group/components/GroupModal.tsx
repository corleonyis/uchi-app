import { Stack, TextInput, Flex, Button } from "@mantine/core";
import { useState } from "react";
import { UAModal } from "../../../components/UAModal";

// グループの操作に関するモーダル
type GroupModalProps = {
  opend: boolean;
  createGroup: (name: string) => void;
  close: () => void;
};

export const GroupModal: React.FC<GroupModalProps> = ({
  opend,
  createGroup,
  close,
}) => {
  const [name, setName] = useState("");

  return (
    <UAModal title="グループの新規作成" opened={opend} close={close}>
      <Stack justify="flex-start" spacing={"xs"}>
        <TextInput
          label="グループ名"
          value={name}
          onChange={(event) => {
            setName(event.currentTarget.value);
          }}
        />
        <Flex justify={"flex-end"} align="center" gap="sm">
          <Button
            color="gray"
            onClick={() => {
              setName("");
              close();
            }}
          >
            キャンセル
          </Button>
          <Button
            onClick={() => {
              createGroup(name);
              setName("");
              close();
            }}
          >
            登録
          </Button>
        </Flex>
      </Stack>
    </UAModal>
  );
};