import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent,
  Divider,
  CircularProgress,
  useTheme,
  Tab,
  Tabs
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import TableChartIcon from '@mui/icons-material/TableChart';
import MapIcon from '@mui/icons-material/Map';

const IndicadoresGraficos = ({ dados, loading }) => {
  const theme = useTheme();
  const [tipoGrafico, setTipoGrafico] = useState('barras');
  
  const handleChangeTipoGrafico = (event, newValue) => {
    setTipoGrafico(newValue);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6" component="h3" gutterBottom>
        Visualização de Dados
      </Typography>
      <Divider sx={{ mb: 2 }} />
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs 
          value={tipoGrafico} 
          onChange={handleChangeTipoGrafico} 
          aria-label="tipos de gráficos"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab 
            icon={<BarChartIcon />} 
            label="Barras" 
            value="barras" 
            iconPosition="start"
          />
          <Tab 
            icon={<TimelineIcon />} 
            label="Linhas" 
            value="linhas" 
            iconPosition="start"
          />
          <Tab 
            icon={<TableChartIcon />} 
            label="Tabela" 
            value="tabela" 
            iconPosition="start"
          />
          <Tab 
            icon={<MapIcon />} 
            label="Mapa" 
            value="mapa" 
            iconPosition="start"
          />
        </Tabs>
      </Box>
      
      <Box sx={{ 
        height: 400, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        bgcolor: 'background.default',
        borderRadius: 1,
        p: 2
      }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {tipoGrafico === 'barras' && 'Gráfico de Barras'}
            {tipoGrafico === 'linhas' && 'Gráfico de Linhas'}
            {tipoGrafico === 'tabela' && 'Visualização em Tabela'}
            {tipoGrafico === 'mapa' && 'Visualização em Mapa'}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mt: 1 }}>
            Os gráficos interativos serão implementados na próxima fase do desenvolvimento, com a integração completa dos dados.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default IndicadoresGraficos;
