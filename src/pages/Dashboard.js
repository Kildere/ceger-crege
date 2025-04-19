import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Bem-vindo à Plataforma CEGER/CREGE
      </Typography>
      
      <Typography variant="body1" paragraph>
        Esta plataforma foi desenvolvida para a divulgação, publicação e acompanhamento das ações e resultados do Comitê Estadual de Gestão de Resultados de Aprendizagem (CEGER) e dos 16 Comitês Regionais (CREGE).
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom color="primary">
                Cartilha Digital
              </Typography>
              <Typography variant="body2">
                Acesse o conteúdo completo da cartilha CEGER/CREGE, com informações sobre os comitês, indicadores, metas e boas práticas na gestão escolar.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom color="secondary">
                Painel de Indicadores
              </Typography>
              <Typography variant="body2">
                Visualize os indicadores e metas de desempenho da gestão escolar, com dados atualizados e filtros por GRE, município e escola.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom color="info.main">
                Relatórios
              </Typography>
              <Typography variant="body2">
                Gere relatórios personalizados com base nos dados de indicadores e metas, com opções de exportação em diferentes formatos.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom color="warning.main">
                Sobre o CEGER/CREGE
              </Typography>
              <Typography variant="body2">
                Conheça mais sobre o Comitê Estadual de Gestão de Resultados de Aprendizagem e os Comitês Regionais, seus objetivos e composição.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
