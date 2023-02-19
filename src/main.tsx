import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <ChakraProvider>
      <App compiler="TypeScript" framework="React"/>
    </ChakraProvider>
  </HashRouter>
)
