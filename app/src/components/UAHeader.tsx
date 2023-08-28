import React from "react";
import { 
  Text,
  Header,
  MediaQuery,
  Burger
} from "@mantine/core";

type Props = {
  opend: boolean,
  color: string,
  onClickEvent: (f: boolean) => void
}

export const UAHeader: React.FC<Props> = ({opend, color, onClickEvent}) => {
  return(
    <Header height={{ base: 50, md: 70}} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opend}
            onClick={() => onClickEvent(!opend)}
            size="sm"
            color={color}
            mr="xl"
          />
        </MediaQuery>

      <Text>Uchi App</Text>

      </div>
    </Header>
  )
}
