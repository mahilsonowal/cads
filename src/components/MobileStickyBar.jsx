import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileStickyBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  if (!isMobile) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        display: 'flex',
        gap: 1,
        p: 1.5,
        px: 2,
        background: 'rgba(10, 10, 10, 0.92)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 193, 7, 0.15)',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.5)',
      }}
    >
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          if (location.pathname !== '/') {
            navigate('/#contact');
          } else {
            const element = document.querySelector('#contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
        startIcon={<AppRegistrationIcon />}
        sx={{
          py: 1.3,
          fontSize: '0.88rem',
          fontWeight: 700,
          borderRadius: 2,
          minHeight: 48,
          background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
          color: '#000',
          boxShadow: '0 2px 12px rgba(255,193,7,0.3)',
        }}
      >
        Register Now
      </Button>
      <Button
        variant="outlined"
        fullWidth
        href="tel:7076700689"
        startIcon={<PhoneIcon />}
        sx={{
          py: 1.3,
          fontSize: '0.88rem',
          fontWeight: 700,
          borderRadius: 2,
          minHeight: 48,
          borderColor: '#FFC107',
          borderWidth: 2,
          color: '#FFC107',
          '&:hover': {
            borderColor: '#FFD54F',
            borderWidth: 2,
            backgroundColor: 'rgba(255, 193, 7, 0.08)',
          },
        }}
      >
        Call Now
      </Button>
    </Box>
  );
};

export default MobileStickyBar;
