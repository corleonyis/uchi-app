import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MantineProvider, Text } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Text>
            Edit <code>src/App.tsx</code> and save to reload.
          </Text>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </MantineProvider>
  );
}

export default App;
