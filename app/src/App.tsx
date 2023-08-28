import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UAAppShell } from './components/UAAppShell';

import { MantineProvider, Text } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <UAAppShell>
        Contents
      </UAAppShell>
    </MantineProvider>
  );
}

export default App;
