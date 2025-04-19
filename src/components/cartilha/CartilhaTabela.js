import React from 'react';
import { Box, Typography, Divider, useTheme, Paper, Grid } from '@mui/material';

const CartilhaTabela = ({ title, description }) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ my: 3 }}>
      <Typography 
        variant="h6" 
        component="h3" 
        sx={{ 
          color: theme.palette.info.main,
          fontWeight: 'bold',
          mb: 1
        }}
      >
        {title}
      </Typography>
      
      <Paper 
        elevation={0} 
        sx={{ 
          p: 2, 
          border: `1px solid ${theme.palette.divider}`,
          mb: 2
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description || 'Tabela de indicadores e metas.'}
        </Typography>
        
        <Box 
          sx={{ 
            p: 3, 
            bgcolor: 'background.default',
            borderRadius: 1,
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            As tabelas detalhadas serão implementadas na próxima fase do desenvolvimento, com a integração do painel de indicadores.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default CartilhaTabela;
