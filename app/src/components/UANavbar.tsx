import React, { useContext, useState } from "react";
import { Navbar, ScrollArea, Divider, Text, Avatar, Flex, Accordion, NavLink } from "@mantine/core";
import { AuthContext } from "../features/auth/components/Auth";

type Props = {
  hidden: boolean
}

const lsitData = [
  { label: "ShoppingList", href: "/lists/buy" },
  { label: "StockList", href: "/lists/stock" }
]
const scheduleData = [
  { label: "Calendar", href: "/calendar" }
]
const settingData = [
  { label: "Category", href: "/setting/category"}
]

export const UANavbar: React.FC<Props> = ({hidden}) => {
  const [value, setValue] = useState<string[]>([]) // Accordion
  const [listActive, setListActive] = useState<number | null>(null)
  const [scheduleActive, setScheduleActive] = useState<number | null>(null)
  const [settingActive, setSettingActive] = useState<number | null>(null)

  const listItems = lsitData.map((item, index) => (
    <NavLink
      component="a"
      href={item.href}
      key={item.label}
      active={index === listActive}
      label={item.label}
      onClick={
        () => {
          setListActive(index) 
          setScheduleActive(null)
          setSettingActive(null)
        }
      }
    />
  ))
  const scheduleItems = scheduleData.map((item, index) => (
    <NavLink
      component="a"
      href={item.href}
      key={item.label}
      active={index === scheduleActive}
      label={item.label}
      onClick={
        () => {
          setListActive(null) 
          setScheduleActive(index)
          setSettingActive(null)
        }
      }
    />
  ))
  const settingItems = settingData.map((item, index) => (
    <NavLink
      component="a"
      href={item.href}
      key={item.label}
      active={index === settingActive}
      label={item.label}
      onClick={
        () => {
          setListActive(null) 
          setScheduleActive(null)
          setSettingActive(index)
        }
      }
    />
  ))

  // auth 
  const authContextValue = useContext(AuthContext)

  return(
    <Navbar p="md" width={{sm: 200, lg: 300}} hiddenBreakpoint="sm" hidden={hidden}>
      
      {/* Navbar Contents */}
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <Accordion multiple value={value} onChange={setValue}>
          <Accordion.Item value="lists">
            <Accordion.Control>Lists</Accordion.Control>
            <Accordion.Panel>
              {listItems}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="schedule">
            <Accordion.Control>Schedule</Accordion.Control>
            <Accordion.Panel>
              {scheduleItems}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="settings">
            <Accordion.Control>Settings</Accordion.Control>
            <Accordion.Panel>
              {settingItems}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Navbar.Section>

      <Divider my="sm"/>
      
      {/* Footer */}
      <Navbar.Section> 
          <Flex align="center" gap="md">
            <Avatar src={authContextValue.user?.photoURL} radius="xl"/>
            <Text>{authContextValue.user?.displayName}</Text>
          </Flex>
      </Navbar.Section>
    </Navbar>
  )
}
