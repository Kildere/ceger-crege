import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CartilhaContent from '../components/cartilha/CartilhaContent';

// Estrutura da cartilha baseada no conteúdo extraído
const sections = [
  { id: 'apresentacao', title: 'Apresentação', order: 1 },
  { id: 'sobre-comites', title: 'Sobre os Comitês', order: 2 },
  { id: 'ceger', title: 'Comitê Estadual (CEGER)', order: 3 },
  { id: 'crege', title: 'Comitês Regionais (CREGE)', order: 4 },
  { id: 'atribuicoes-ceger', title: 'Atribuições do CEGER', order: 5 },
  { id: 'atribuicoes-crege', title: 'Atribuições dos CREGE', order: 6 },
  { id: 'atribuicoes-coordenadores', title: 'Atribuições dos Coordenadores', order: 7 },
  { id: 'indicadores-metas', title: 'Indicadores e Metas', order: 8 },
  { id: 'boas-praticas', title: 'Boas Práticas na Gestão Escolar', order: 9 },
  { id: 'recursos-apoio', title: 'Recursos e Apoio', order: 10 },
  { id: 'consideracoes', title: 'Considerações Finais', order: 11 },
  { id: 'referencias', title: 'Referências', order: 12 },
  { id: 'anexos', title: 'Anexos', order: 13 }
];

const drawerWidth = 240;

const Cartilha = () => {
  const [selectedSection, setSelectedSection] = useState('apresentacao');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSectionSelect = (sectionId) => {
    setSelectedSection(sectionId);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ width: drawerWidth, bgcolor: 'background.paper' }}>
      <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Typography variant="h6" color="primary" fontWeight="bold">
          Sumário da Cartilha
        </Typography>
      </Box>
      <List sx={{ pt: 0 }}>
        {sections.map((section) => (
          <ListItem key={section.id} disablePadding>
            <ListItemButton 
              selected={selectedSection === section.id}
              onClick={() => handleSectionSelect(section.id)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: `${theme.palette.primary.main}20`,
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                },
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.main}10`,
                },
              }}
            >
              <ListItemText 
                primary={section.title} 
                primaryTypographyProps={{ 
                  variant: 'body2',
                  fontWeight: selectedSection === section.id ? 'bold' : 'normal'
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ p: { xs: 1, sm: 3 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Cartilha Digital
        </Typography>
        {isMobile && (
          <IconButton
            color="primary"
            aria-label="abrir sumário"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Box>
      
      <Box sx={{ display: 'flex' }}>
        {/* Drawer para dispositivos móveis */}
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Melhor desempenho em dispositivos móveis
            }}
            sx={{
              '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          // Drawer fixo para desktop
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, mr: 3 }}
          >
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { 
                  width: drawerWidth, 
                  boxSizing: 'border-box',
                  position: 'relative',
                  height: 'auto',
                  border: `1px solid ${theme.palette.divider}`,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
        )}
        
        {/* Conteúdo principal */}
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Paper sx={{ p: { xs: 2, sm: 3 } }}>
            <CartilhaContent sectionId={selectedSection} />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Cartilha;
