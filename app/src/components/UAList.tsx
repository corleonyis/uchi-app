import React from "react";
import { Paper, Text, Checkbox, Flex } from "@mantine/core";

type Props = {
  id: number,
  text: String,
  changeEvent: (id: number, checked: boolean) => void
};

export const UAList: React.FC<Props> = ({ text }) => {
  return (
    <Paper p="md" radius="xl">
      <Text>{text}</Text>
    </Paper>
  );
};

export const UAListItem: React.FC<Props> = ({ id, text, changeEvent }) => {
  return (
    <Paper p="md" withBorder>
      <Flex
        gap="md"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Checkbox onChange={(event) => {changeEvent(id, event.currentTarget.checked)}}/>
        <Text>{text}</Text>
      </Flex>
    </Paper>
  );
};
