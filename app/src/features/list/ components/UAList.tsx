import React from "react";
import { Paper, Text, Checkbox, Flex } from "@mantine/core";

type Props = {
  text: String,
};

export const UAList: React.FC<Props> = ({ text }) => {
  return (
    <Paper p="md" radius="xl">
      <Text>{text}</Text>
    </Paper>
  );
};

export const UAListItem: React.FC<Props> = ({ text }) => {
  return (
    <Paper p="md" withBorder>
      <Flex
        gap="md"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Checkbox/>
        <Text>{text}</Text>
      </Flex>
    </Paper>
  );
};
