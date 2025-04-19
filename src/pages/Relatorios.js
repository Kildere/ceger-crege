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
  Button,
  Divider,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TableChartIcon from '@mui/icons-material/TableChart';

const Relatorios = () => {
  const [filtros, setFiltros] = useState({
    tipo: '',
    gre: '',
    periodo: ''
  });
  const [loading, setLoading] = useState(false);
  const [relatoriosGerados, setRelatoriosGerados] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFiltros(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGerarRelatorio = () => {
    setLoading(true);
    
    // Simulação de geração de relatório
    setTimeout(() => {
      const novoRelatorio = {
        id: Date.now(),
        nome: `Relatório ${filtros.tipo} - ${filtros.gre || 'Todas GREs'} - ${filtros.periodo || 'Todos períodos'}`,
        data: new Date().toLocaleDateString('pt-BR'),
        tipo: filtros.tipo === 'aprovacao' ? 'Taxa de Aprovação' : 
              filtros.tipo === 'reprovacao' ? 'Taxa de Reprovação' : 
              filtros.tipo === 'abandono' ? 'Taxa de Abandono' : 
              filtros.tipo === 'portugues' ? 'Proficiência em Português' : 
              filtros.tipo === 'matematica' ? 'Proficiência em Matemática' : 'Geral',
        formato: Math.random() > 0.5 ? 'PDF' : 'XLS'
      };
      
      setRelatoriosGerados(prev => [novoRelatorio, ...prev]);
      setLoading(false);
    }, 1500);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Relatórios
      </Typography>
      
      <Typography variant="body1" paragraph>
        Gere relatórios personalizados com base nos dados de indicadores e metas. Utilize os filtros para personalizar os relatórios.
      </Typography>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Gerar Novo Relatório
        </Typography>
        <Divider sx={{ mb: 2 }} />
        
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="tipo-relatorio-label">Tipo de Relatório</InputLabel>
              <Select
                labelId="tipo-relatorio-label"
                id="tipo-relatorio"
                name="tipo"
                value={filtros.tipo}
                label="Tipo de Relatório"
                onChange={handleChange}
              >
                <MenuItem value=""><em>Selecione</em></MenuItem>
                <MenuItem value="geral">Relatório Geral</MenuItem>
                <MenuItem value="aprovacao">Taxa de Aprovação</MenuItem>
                <MenuItem value="reprovacao">Taxa de Reprovação</MenuItem>
                <MenuItem value="abandono">Taxa de Abandono</MenuItem>
                <MenuItem value="portugues">Proficiência em Português</MenuItem>
                <MenuItem value="matematica">Proficiência em Matemática</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="gre-relatorio-label">GRE</InputLabel>
              <Select
                labelId="gre-relatorio-label"
                id="gre-relatorio"
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
          
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="periodo-relatorio-label">Período</InputLabel>
              <Select
                labelId="periodo-relatorio-label"
                id="periodo-relatorio"
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
          
          <Grid item xs={12} sm={2}>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <DownloadIcon />}
              onClick={handleGerarRelatorio}
              disabled={!filtros.tipo || loading}
            >
              {loading ? 'Gerando...' : 'Gerar'}
            </Button>
          </Grid>
        </Grid>
      </Paper>
      
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Relatórios Gerados
        </Typography>
        <Divider sx={{ mb: 2 }} />
        
        {relatoriosGerados.length === 0 ? (
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
            Nenhum relatório gerado. Utilize os filtros acima para gerar um novo relatório.
          </Typography>
        ) : (
          <TableContainer>
            <Table sx={{ minWidth: 650 }} size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Formato</TableCell>
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {relatoriosGerados.map((relatorio) => (
                  <TableRow key={relatorio.id}>
                    <TableCell component="th" scope="row">
                      {relatorio.nome}
                    </TableCell>
                    <TableCell>{relatorio.tipo}</TableCell>
                    <TableCell>{relatorio.data}</TableCell>
                    <TableCell>{relatorio.formato}</TableCell>
                    <TableCell align="center">
                      <Button 
                        variant="outlined" 
                        size="small" 
                        startIcon={relatorio.formato === 'PDF' ? <PictureAsPdfIcon /> : <TableChartIcon />}
                      >
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
};

export default Relatorios;
