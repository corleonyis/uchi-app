import React from 'react';
import './App.css';
import { UAAppShell } from './components/UAAppShell';

import { MantineProvider } from '@mantine/core';

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
