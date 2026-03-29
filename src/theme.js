import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC107',
      light: '#FFD54F',
      dark: '#FFA000',
      contrastText: '#000000',
    },
    secondary: {
      main: '#1A1A1A',
      light: '#333333',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0A0A0A',
      paper: '#141414',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Inter", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
          color: '#000000',
          boxShadow: '0 4px 20px rgba(255, 193, 7, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #FFA000 0%, #FFC107 100%)',
            boxShadow: '0 6px 30px rgba(255, 193, 7, 0.6)',
            transform: 'translateY(-2px)',
          },
        },
        outlinedPrimary: {
          borderColor: '#FFC107',
          borderWidth: 2,
          color: '#FFC107',
          '&:hover': {
            borderColor: '#FFD54F',
            borderWidth: 2,
            backgroundColor: 'rgba(255, 193, 7, 0.08)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
  },
});

export default theme;
