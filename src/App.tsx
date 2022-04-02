import React, { FC } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import logo from './logo.svg';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material'
import themeDefault from './components/helpers/theme-default'
import Issues from './pages/Issues';
import Issue from './pages/Issue';
import Header from './components/layout/Header';


const App: FC = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <CssBaseline />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Issues />} />
          <Route path="/issue/:id" element={<Issue />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
