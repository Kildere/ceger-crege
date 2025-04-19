import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  IconButton,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar
} from '@mui/material';
import { 
  Dashboard as DashboardIcon, 
  MenuBook as MenuBookIcon, 
  BarChart as BarChartIcon, 
  Description as DescriptionIcon, 
  Info as InfoIcon,
  Menu as MenuIcon
} from '@mui/icons-material';

const drawerWidth = 240;

const menuItems = [
  { text: 'Início', icon: <DashboardIcon />, path: '/' },
  { text: 'Cartilha Digital', icon: <MenuBookIcon />, path: '/cartilha' },
  { text: 'Painel de Indicadores', icon: <BarChartIcon />, path: '/indicadores' },
  { text: 'Relatórios', icon: <DescriptionIcon />, path: '/relatorios' },
  { text: 'Sobre o CEGER/CREGE', icon: <InfoIcon />, path: '/sobre' },
];

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const drawer = (
    <>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          p: 2 
        }}
      >
        <img 
          src="/images/logo_see_pb.png" 
          alt="Logo SEE-PB" 
          style={{ 
            width: '80%', 
            marginBottom: '10px' 
          }} 
        />
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            fontWeight: 'bold', 
            textAlign: 'center',
            color: theme.palette.primary.main
          }}
        >
          CEGER/CREGE
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            onClick={() => navigate(item.path)}
            selected={location.pathname === item.path}
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
            <ListItemIcon 
              sx={{ 
                color: location.pathname === item.path ? theme.palette.primary.main : 'inherit' 
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                '& .MuiTypography-root': { 
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal' 
                } 
              }} 
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
          <img 
            src="/images/logo_siave.png" 
            alt="Logo SIAVE" 
            style={{ 
              height: '40px', 
              marginRight: '10px' 
            }} 
          />
          <img 
            src="/images/logo_siage.png" 
            alt="Logo SIAGE" 
            style={{ 
              height: '40px' 
            }} 
          />
        </Box>
        <Typography 
          variant="caption" 
          component="div" 
          sx={{ 
            textAlign: 'center',
            color: theme.palette.text.secondary
          }}
        >
          © 2025 Secretaria de Estado da Educação da Paraíba
        </Typography>
      </Box>
    </>
  );

  return (
    <>
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            boxShadow: 1,
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <IconButton
              color="primary"
              aria-label="abrir menu"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src="/images/logo_see_pb.png" 
                alt="Logo SEE-PB" 
                style={{ 
                  height: '40px', 
                  marginRight: '10px' 
                }} 
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
              >
                CEGER/CREGE
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      )}

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        {/* Versão móvel */}
        {isMobile && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Melhor desempenho em dispositivos móveis
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: drawerWidth 
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
        
        {/* Versão desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
      {/* Espaçador para compensar a AppBar em dispositivos móveis */}
      {isMobile && <Toolbar />}
    </>
  );
};

export default Sidebar;
