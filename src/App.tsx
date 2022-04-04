import React, { FC } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material'
import themeDefault from './components/helpers/theme-default'
import Issues from './pages/Issues';
import Issue from './pages/Issue';
import Header from './components/layout/Header';
import { client } from './services/apiService';


const App: FC = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <CssBaseline />
      <Header />
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Issues />} />
            <Route path="/issue/:id" element={<Issue />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
