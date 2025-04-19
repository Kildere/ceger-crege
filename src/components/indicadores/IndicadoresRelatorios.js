import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent,
  Divider,
  useTheme,
  Button
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TableChartIcon from '@mui/icons-material/TableChart';

const IndicadoresRelatorios = () => {
  const theme = useTheme();
  
  const relatorios = [
    {
      id: 'aprovacao-geral',
      titulo: 'Taxa de Aprovação Geral',
      descricao: 'Relatório completo com as taxas de aprovação por GRE, município e escola',
      icone: <PictureAsPdfIcon />
    },
    {
      id: 'reprovacao-geral',
      titulo: 'Taxa de Reprovação Geral',
      descricao: 'Relatório completo com as taxas de reprovação por GRE, município e escola',
      icone: <PictureAsPdfIcon />
    },
    {
      id: 'abandono-geral',
      titulo: 'Taxa de Abandono Geral',
      descricao: 'Relatório completo com as taxas de abandono por GRE, município e escola',
      icone: <PictureAsPdfIcon />
    },
    {
      id: 'proficiencia-portugues',
      titulo: 'Proficiência em Português',
      descricao: 'Relatório detalhado com os resultados de proficiência em Português',
      icone: <TableChartIcon />
    },
    {
      id: 'proficiencia-matematica',
      titulo: 'Proficiência em Matemática',
      descricao: 'Relatório detalhado com os resultados de proficiência em Matemática',
      icone: <TableChartIcon />
    },
    {
      id: 'metas-siave',
      titulo: 'Metas SIAVE',
      descricao: 'Relatório com as metas SIAVE para todas as escolas da rede',
      icone: <PictureAsPdfIcon />
    }
  ];

  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Relatórios Disponíveis
        </Typography>
        <Button 
          variant="outlined" 
          size="small" 
          startIcon={<DownloadIcon />}
          sx={{ mb: 1 }}
        >
          Gerar Novo Relatório
        </Button>
      </Box>
      <Divider sx={{ mb: 2 }} />
      
      <Grid container spacing={2}>
        {relatorios.map((relatorio) => (
          <Grid item xs={12} sm={6} md={4} key={relatorio.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ 
                    mr: 1, 
                    color: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {relatorio.icone}
                  </Box>
                  <Typography variant="subtitle1" component="div" fontWeight="medium">
                    {relatorio.titulo}
                  </Typography>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {relatorio.descricao}
                </Typography>
                
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="small" 
                  startIcon={<DownloadIcon />}
                  fullWidth
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default IndicadoresRelatorios;
