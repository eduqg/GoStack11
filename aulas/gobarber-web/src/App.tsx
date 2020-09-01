import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  </>
);

export default App;
