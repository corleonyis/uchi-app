import React, { useRef, useState } from "react";
import { MantineProvider, useMantineTheme, Paper, Stack, UnstyledButton, Text, Flex, Divider, TextInput, Button, Center } from "@mantine/core";
import { UAAppShell } from "../../../components/UAAppShell";
import { UAListItem } from "../ components/UAList";
import { ShoppingListType } from "../ components/Type";
import { useDisclosure } from "@mantine/hooks";
import { UAModal } from "../ components/UAModal";

export const ShoppingList: React.FC = () => {
  const theme = useMantineTheme()

  // 購入リスト
  const [listItems, setListItems] = useState<ShoppingListType[]>([])
  // アイテム追加
  const addItem = (title: string) => {
    setListItems((prevItems) => {
      return [...prevItems, {id:listItems.length, title: title, done: false}]
    })
  }

  // リストアイテム生成
  const buyList = listItems.map((item) => (
    <UAListItem text={item.title} key={item.id}/>
  ))

  // Modal
  const [opened, { open, close }] = useDisclosure(false);
  const [newTitle, setNewTitle] = useState("")
  const register = () => {
    addItem(newTitle)
    setNewTitle("")
    close()
  }
  const cancel = () => {
    setNewTitle("")
    close()
  }

  return (
    <MantineProvider>
      <UAAppShell>
          <UAModal title="アイテムを追加" opened={opened} close={close}>
            <Stack justify="flex-start" spacing={"xs"}>
              {/* <Text>アイテム名</Text> */}
              <TextInput label="アイテム名" value={newTitle} onChange={(event) => setNewTitle(event.currentTarget.value)}/>
              <Flex
                justify={"flex-end"}
                align="center"
                gap="sm"
              >
                <Button onClick={cancel} color="gray">キャンセル</Button>
                <Button onClick={register}>登録</Button>
              </Flex>
            </Stack>
          </UAModal>
          {
            listItems.length > 0 
            ? // 買い物リストにアイテムがある時
              <Stack justify="flex-start" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
                {buyList}
                <Divider/>
                <UnstyledButton onClick={open}>
                  <Paper p="xs" withBorder>
                    <Flex
                      justify="center"
                      align="center"
                      direction="row"
                      wrap="wrap"
                    >
                      <Text>新しいアイテムを追加する</Text>
                    </Flex>
                  </Paper>
                </UnstyledButton>
                <UnstyledButton onClick={() => {}}>
                  <Paper p="xs" withBorder>
                    <Flex
                      justify="center"
                      align="center"
                      direction="row"
                      wrap="wrap"
                    >
                      <Text color="red">チェック済みのアイテムを削除する</Text>
                    </Flex>
                  </Paper>
                </UnstyledButton>
              </Stack>  
            : // 買い物リストが空の時
            <Stack justify="flex-start" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
                <Flex
                  justify="center"
                  align="center"
                  direction="row"
                  wrap="wrap"
                >
                  <Text>買い物リストは空です。</Text>
                </Flex>
                <Divider/>
                <UnstyledButton onClick={open}>
                  <Paper p="xs" withBorder>
                    <Flex
                      justify="center"
                      align="center"
                      direction="row"
                      wrap="wrap"
                    >
                      <Text>新しいアイテムを追加する</Text>
                    </Flex>
                  </Paper>
                </UnstyledButton>
            </Stack>
          }
      </UAAppShell>
    </MantineProvider>
  );
};
