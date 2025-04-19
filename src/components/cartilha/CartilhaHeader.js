import React from 'react';
import { Box, Typography, Paper, Divider, useTheme } from '@mui/material';

const CartilhaHeader = ({ title }) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ mb: 3 }}>
      <Typography 
        variant="h5" 
        component="h2" 
        sx={{ 
          color: theme.palette.primary.main,
          fontWeight: 'bold',
          mb: 1
        }}
      >
        {title}
      </Typography>
      <Divider />
    </Box>
  );
};

export default CartilhaHeader;
