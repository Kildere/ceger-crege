import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Divider } from '@mui/material';

const Sobre = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Sobre o CEGER/CREGE
      </Typography>
      
      <Paper sx={{ p: 3, mt: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom color="primary">
          Comitê Estadual de Gestão de Resultados de Aprendizagem (CEGER)
        </Typography>
        
        <Typography variant="body1" paragraph>
          O Comitê Estadual de Gestão da Rede Estadual (CEGER) foi criado para atender à necessidade de monitorar o desenvolvimento escolar e garantir a obtenção de resultados efetivos de aprendizagem.
        </Typography>
        
        <Typography variant="body1" paragraph>
          O Comitê CEGER é composto pelo Secretário de Estado da Educação, que exercerá a função de coordenador, pelo Secretário Executivo de Gestão Pedagógica, que atuará como subcoordenador, e pelo Gerente Executivo de Desenvolvimento Escolar, Acompanhamento e Apoio à Gestão para Resultados de Aprendizagem (GEDRA), que assumirá o papel de relator. Além destes, também fazem parte do comitê os demais Gerentes Executivos da Secretaria de Estado da Educação e os Gerentes Regionais de Educação.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" component="h2" gutterBottom color="secondary">
          Comitês Regionais de Gestão de Resultado de Aprendizagem (CREGE)
        </Typography>
        
        <Typography variant="body1" paragraph>
          Os Comitês Regionais de Gestão de Resultados de Aprendizagem (CREGE), têm como foco a atuação regional e é composto pelo Gerente Regional de Educação de Ensino, que assume a coordenação, e pelo Chefe do Núcleo de Desenvolvimento da Escola e da Aprendizagem (NUDEA), que atuará como relator. Também fazem parte do comitê o Chefe do Núcleo de Desenvolvimento e Protagonismo Estudantil, o Chefe do Núcleo de Infraestrutura e Suporte de Tecnologia da Informação, além dos Gestores das Escolas da Rede Estadual de Educação de sua respectiva Gerência.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" component="h2" gutterBottom color="info.main">
          Objetivos
        </Typography>
        
        <Typography variant="body1" paragraph>
          Os comitês têm como objetivos:
        </Typography>
        
        <Typography variant="body1" component="div" sx={{ pl: 2 }}>
          • Melhorar os índices de fluxo da Rede Estadual de Educação, elevando-o sempre que possível, para patamares superiores a 90% (noventa por cento), com base na conceituação do Censo Escolar.
        </Typography>
        
        <Typography variant="body1" component="div" sx={{ pl: 2 }}>
          • Elevar os índices de aprendizagem dos estudantes da Rede Estadual de Educação, conforme mensurado anualmente pelo Sistema SIAVE e bienalmente pelo Sistema SAEB.
        </Typography>
        
        <Typography variant="body1" component="div" sx={{ pl: 2, mb: 2 }}>
          • Instituir, anualmente, o Plano de Metas SIAVE para todas as escolas da Rede Estadual de Educação.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Sobre;
