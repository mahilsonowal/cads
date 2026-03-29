import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';

const navItems = [
  { label: 'Courses', href: '/#courses' },
  { label: 'Exams', href: '/#exams' },
  { label: 'Why Us', href: '/#facilities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (href) => {
    setDrawerOpen(false);

    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate(href);
      } else {
        const hash = href.replace('/', '');
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = hash;
        }
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(10, 10, 10, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255, 193, 7, 0.1)'
            : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1300,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              py: 1,
              justifyContent: 'space-between',
              minHeight: { xs: 64, md: 72 },
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
              }}
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Box
                component="img"
                src="/logo-circle.jpeg"
                alt="CADS Logo"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 193, 7, 0.5)',
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    lineHeight: 1.1,
                    background: 'linear-gradient(135deg, #FFC107, #FFD54F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  CADS
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Createch Art & Design
                </Typography>
              </Box>
            </Box>

            {/* Desktop Nav */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.9rem',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      '&:hover': {
                        color: '#FFC107',
                        backgroundColor: 'rgba(255, 193, 7, 0.05)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  href="tel:7076700689"
                  startIcon={<PhoneIcon />}
                  sx={{
                    ml: 2,
                    py: 1,
                    px: 3,
                    fontSize: '0.85rem',
                  }}
                >
                  Call Now
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  color: '#FFC107',
                  border: '1px solid rgba(255, 193, 7, 0.3)',
                  borderRadius: 2,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '75%',
            maxWidth: 320,
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(30px)',
            pt: 2,
          },
        }}
      >
        <Box sx={{ px: 2, pb: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: '#FFC107' }}
          >
            {/* <CloseIcon /> */}
          </IconButton>
        </Box>

        <Box sx={{ px: 2, mb: 4 }}>
          <Box
            component="img"
            src="/logo-circle.jpeg"
            alt="CADS Logo"
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              border: '2px solid rgba(255, 193, 7, 0.5)',
              mb: 1,
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FFC107, #FFD54F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            CADS
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            Createch Art & Design Studio
          </Typography>
        </Box>

        <List sx={{ px: 1 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(255, 193, 7, 0.08)',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '1.1rem',
                }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ px: 3, mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            href="tel:7076700689"
            startIcon={<PhoneIcon />}
            sx={{ mb: 1.5 }}
          >
            Call Now
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => handleNavClick('/#contact')}
          >
            Register
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
