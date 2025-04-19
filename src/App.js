import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Cartilha from './pages/Cartilha';
import Indicadores from './pages/Indicadores';
import Relatorios from './pages/Relatorios';
import Sobre from './pages/Sobre';

// Tema personalizado com as cores da SEE-PB
const theme = createTheme({
  palette: {
    primary: {
      main: '#E53935', // Vermelho
    },
    secondary: {
      main: '#2E7D32', // Verde
    },
    info: {
      main: '#1E88E5', // Azul
    },
    warning: {
      main: '#FBC02D', // Amarelo
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
  },
});

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app-container">
          <Sidebar 
            mobileOpen={mobileOpen} 
            handleDrawerToggle={handleDrawerToggle} 
          />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cartilha" element={<Cartilha />} />
              <Route path="/indicadores" element={<Indicadores />} />
              <Route path="/relatorios" element={<Relatorios />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
