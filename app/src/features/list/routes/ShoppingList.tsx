import React, { useState } from "react";
import {
  Paper,
  Stack,
  UnstyledButton,
  Text,
  Flex,
  Divider,
  TextInput,
  Button,
} from "@mantine/core";
import { UAListItem } from "../components/UAList";
import { ShoppingListType } from "../components/Type";
import { useDisclosure } from "@mantine/hooks";
import { UAModal } from "../components/UAModal";

export const ShoppingList: React.FC = () => {
  // 購入リスト
  const [listItems, setListItems] = useState<ShoppingListType[]>([]);
  // アイテム追加
  const addItem = (title: string) => {
    setListItems((prevItems) => {
      return [
        ...prevItems,
        { id: listItems.length, title: title, done: false },
      ];
    });
  };
  // チェック状態の更新
  const updateDone = (id: number, checked: boolean) => {
    setListItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          item.done = checked;
        }
        return item;
      });
    });
  };
  // チェック済みアイテムの削除
  const deleteItem = () => {
    setListItems(listItems.filter((item) => item.done === false));
  };

  // リストアイテム生成
  const buyList = listItems.map((item) => (
    <UAListItem
      key={item.id}
      id={item.id}
      text={item.title}
      changeEvent={updateDone}
    />
  ));

  // Modal
  const [opened, { open, close }] = useDisclosure(false);
  const [newTitle, setNewTitle] = useState("");
  const register = () => {
    addItem(newTitle);
    setNewTitle("");
    close();
  };
  const cancel = () => {
    setNewTitle("");
    close();
  };

  return (
    <div>
      <UAModal title="アイテムを追加" opened={opened} close={close}>
        <Stack justify="flex-start" spacing={"xs"}>
          {/* <Text>アイテム名</Text> */}
          <TextInput
            label="アイテム名"
            value={newTitle}
            onChange={(event) => setNewTitle(event.currentTarget.value)}
          />
          <Flex justify={"flex-end"} align="center" gap="sm">
            <Button onClick={cancel} color="gray">
              キャンセル
            </Button>
            <Button onClick={register}>登録</Button>
          </Flex>
        </Stack>
      </UAModal>
      {listItems.length > 0 ? (
        // 買い物リストにアイテムがある時
        <Stack
          justify="flex-start"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          })}
        >
          {buyList}
          <Divider />
          <UnstyledButton onClick={open}>
            <Paper p="xs" withBorder>
              <Flex justify="center" align="center" direction="row" wrap="wrap">
                <Text>新しいアイテムを追加する</Text>
              </Flex>
            </Paper>
          </UnstyledButton>
          <UnstyledButton onClick={deleteItem}>
            <Paper p="xs" withBorder>
              <Flex justify="center" align="center" direction="row" wrap="wrap">
                <Text color="red">チェック済みのアイテムを削除する</Text>
              </Flex>
            </Paper>
          </UnstyledButton>
        </Stack>
      ) : (
        // 買い物リストが空の時
        <Stack
          justify="flex-start"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          })}
        >
          <Flex justify="center" align="center" direction="row" wrap="wrap">
            <Text>買い物リストは空です。</Text>
          </Flex>
          <Divider />
          <UnstyledButton onClick={open}>
            <Paper p="xs" withBorder>
              <Flex justify="center" align="center" direction="row" wrap="wrap">
                <Text>新しいアイテムを追加する</Text>
              </Flex>
            </Paper>
          </UnstyledButton>
        </Stack>
      )}
    </div>
  );
};
