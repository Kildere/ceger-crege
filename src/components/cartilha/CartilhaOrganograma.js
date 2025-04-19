import React from 'react';
import { Box, Typography, Divider, Grid, Card, CardContent, CardMedia, useTheme } from '@mui/material';

const CartilhaOrganograma = ({ title, imagePath, description }) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ my: 3 }}>
      <Typography 
        variant="h6" 
        component="h3" 
        sx={{ 
          color: theme.palette.secondary.main,
          fontWeight: 'bold',
          mb: 1
        }}
      >
        {title}
      </Typography>
      
      <Card sx={{ maxWidth: '100%', mb: 2 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description || 'Fluxo de trabalho e organização do comitê.'}
          </Typography>
          
          <Box 
            sx={{ 
              p: 2, 
              bgcolor: 'background.default',
              borderRadius: 1,
              textAlign: 'center'
            }}
          >
            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
              Visualização do organograma será implementada na próxima fase.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CartilhaOrganograma;
