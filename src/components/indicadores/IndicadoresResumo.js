import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent,
  Divider,
  CircularProgress,
  useTheme
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import RemoveIcon from '@mui/icons-material/Remove';

const IndicadoresResumo = ({ dados, loading }) => {
  const theme = useTheme();
  
  // Dados de exemplo para demonstração
  const dadosExemplo = {
    aprovacao: {
      valor: 87.5,
      tendencia: 'up',
      meta: 90
    },
    reprovacao: {
      valor: 8.2,
      tendencia: 'down',
      meta: 7
    },
    abandono: {
      valor: 4.3,
      tendencia: 'neutral',
      meta: 3
    },
    portugues: {
      valor: 245,
      tendencia: 'up',
      meta: 250
    },
    matematica: {
      valor: 238,
      tendencia: 'up',
      meta: 245
    }
  };
  
  const dadosReais = dados || dadosExemplo;
  
  const getTendenciaIcon = (tendencia) => {
    switch(tendencia) {
      case 'up':
        return <TrendingUpIcon sx={{ color: theme.palette.success.main }} />;
      case 'down':
        return <TrendingDownIcon sx={{ color: theme.palette.error.main }} />;
      default:
        return <RemoveIcon sx={{ color: theme.palette.text.secondary }} />;
    }
  };
  
  const getStatusColor = (valor, meta, indicador) => {
    // Para taxas de reprovação e abandono, menor é melhor
    if (indicador === 'reprovacao' || indicador === 'abandono') {
      if (valor <= meta) return theme.palette.success.main;
      if (valor <= meta * 1.2) return theme.palette.warning.main;
      return theme.palette.error.main;
    }
    
    // Para os demais indicadores, maior é melhor
    if (valor >= meta) return theme.palette.success.main;
    if (valor >= meta * 0.9) return theme.palette.warning.main;
    return theme.palette.error.main;
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
        Resumo dos Indicadores
      </Typography>
      <Divider sx={{ mb: 2 }} />
      
      <Grid container spacing={2}>
        {Object.entries(dadosReais).map(([key, indicador]) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={key}>
            <Card 
              sx={{ 
                height: '100%',
                borderLeft: `4px solid ${getStatusColor(indicador.valor, indicador.meta, key)}`
              }}
            >
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {key === 'aprovacao' ? 'Taxa de Aprovação' : 
                   key === 'reprovacao' ? 'Taxa de Reprovação' : 
                   key === 'abandono' ? 'Taxa de Abandono' : 
                   key === 'portugues' ? 'Proficiência em Português' : 
                   'Proficiência em Matemática'}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h5" component="div" fontWeight="bold">
                    {indicador.valor}
                    {(key === 'aprovacao' || key === 'reprovacao' || key === 'abandono') && '%'}
                  </Typography>
                  {getTendenciaIcon(indicador.tendencia)}
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Meta: {indicador.meta}
                  {(key === 'aprovacao' || key === 'reprovacao' || key === 'abandono') && '%'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default IndicadoresResumo;
