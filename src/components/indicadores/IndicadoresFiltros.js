import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Divider,
  Card,
  CardContent,
  CircularProgress
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DownloadIcon from '@mui/icons-material/Download';

const IndicadoresFiltros = ({ onFilterChange }) => {
  const [filtros, setFiltros] = useState({
    gre: '',
    municipio: '',
    escola: '',
    periodo: '',
    indicador: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFiltros(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    onFilterChange(filtros);
  };

  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6" component="h3" gutterBottom>
        Filtros
      </Typography>
      <Divider sx={{ mb: 2 }} />
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="gre-label">GRE</InputLabel>
            <Select
              labelId="gre-label"
              id="gre"
              name="gre"
              value={filtros.gre}
              label="GRE"
              onChange={handleChange}
            >
              <MenuItem value=""><em>Todas</em></MenuItem>
              <MenuItem value="01">01ª GRE</MenuItem>
              <MenuItem value="02">02ª GRE</MenuItem>
              <MenuItem value="03">03ª GRE</MenuItem>
              {/* Outros itens serão carregados dinamicamente */}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="municipio-label">Município</InputLabel>
            <Select
              labelId="municipio-label"
              id="municipio"
              name="municipio"
              value={filtros.municipio}
              label="Município"
              onChange={handleChange}
              disabled={!filtros.gre}
            >
              <MenuItem value=""><em>Todos</em></MenuItem>
              <MenuItem value="joao-pessoa">João Pessoa</MenuItem>
              <MenuItem value="campina-grande">Campina Grande</MenuItem>
              {/* Outros itens serão carregados dinamicamente */}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="escola-label">Escola</InputLabel>
            <Select
              labelId="escola-label"
              id="escola"
              name="escola"
              value={filtros.escola}
              label="Escola"
              onChange={handleChange}
              disabled={!filtros.municipio}
            >
              <MenuItem value=""><em>Todas</em></MenuItem>
              <MenuItem value="25094432">EEEFM Domingos Jose da Paixao</MenuItem>
              <MenuItem value="25092332">EEEF Professora Dagmar Mendonca Limeira</MenuItem>
              {/* Outros itens serão carregados dinamicamente */}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="periodo-label">Período</InputLabel>
            <Select
              labelId="periodo-label"
              id="periodo"
              name="periodo"
              value={filtros.periodo}
              label="Período"
              onChange={handleChange}
            >
              <MenuItem value=""><em>Todos</em></MenuItem>
              <MenuItem value="2025-1">2025.1</MenuItem>
              <MenuItem value="2024-2">2024.2</MenuItem>
              <MenuItem value="2024-1">2024.1</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="indicador-label">Indicador</InputLabel>
            <Select
              labelId="indicador-label"
              id="indicador"
              name="indicador"
              value={filtros.indicador}
              label="Indicador"
              onChange={handleChange}
            >
              <MenuItem value=""><em>Todos</em></MenuItem>
              <MenuItem value="aprovacao">Taxa de Aprovação</MenuItem>
              <MenuItem value="reprovacao">Taxa de Reprovação</MenuItem>
              <MenuItem value="abandono">Taxa de Abandono</MenuItem>
              <MenuItem value="portugues">Proficiência em Português</MenuItem>
              <MenuItem value="matematica">Proficiência em Matemática</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6} md={1}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            startIcon={<FilterAltIcon />}
            onClick={handleSubmit}
            sx={{ height: '40px' }}
          >
            Filtrar
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default IndicadoresFiltros;
