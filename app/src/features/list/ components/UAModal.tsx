import { useDisclosure } from '@mantine/hooks';
import { Modal, Text } from '@mantine/core';
import React from 'react';

type Props = {
  title: string,
  children: React.ReactNode,
  center?: boolean,
  opened: boolean,
  close: () => void
};

export const UAModal: React.FC<Props> = ({ title, children, center = false, opened, close }) => {
  return (
    <Modal opened={opened} onClose={close} title={title} centered={center}>
      {children}
    </Modal>
  )
}