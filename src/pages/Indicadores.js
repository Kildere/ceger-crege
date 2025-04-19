import React, { useState } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import IndicadoresFiltros from '../components/indicadores/IndicadoresFiltros';
import IndicadoresResumo from '../components/indicadores/IndicadoresResumo';
import IndicadoresGraficos from '../components/indicadores/IndicadoresGraficos';
import IndicadoresRelatorios from '../components/indicadores/IndicadoresRelatorios';

const Indicadores = () => {
  const [filtros, setFiltros] = useState({});
  const [loading, setLoading] = useState(false);
  const [dados, setDados] = useState(null);

  const handleFilterChange = (novosFiltros) => {
    setLoading(true);
    setFiltros(novosFiltros);
    
    // Simulação de carregamento de dados
    setTimeout(() => {
      // Aqui seria feita a chamada à API para buscar os dados filtrados
      setDados({
        // Dados de exemplo
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Painel de Indicadores
      </Typography>
      
      <Typography variant="body1" paragraph>
        Visualize e analise os indicadores e metas de desempenho da gestão escolar. Utilize os filtros para personalizar a visualização dos dados.
      </Typography>
      
      <IndicadoresFiltros onFilterChange={handleFilterChange} />
      
      <IndicadoresResumo dados={dados} loading={loading} />
      
      <IndicadoresGraficos dados={dados} loading={loading} />
      
      <IndicadoresRelatorios />
    </Box>
  );
};

export default Indicadores;
