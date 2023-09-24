import React, { useState } from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AuthContext } from './features/auth/components/Auth';
import { User } from 'firebase/auth';

function App() {
  const [user, setUser] = useState<User | null>(null)
  return (
    <MantineProvider>
      <AuthContext.Provider value={{user, setUser}}>
        <RouterProvider router={router}/>
      </AuthContext.Provider>
    </MantineProvider>
  );
}

export default App;
