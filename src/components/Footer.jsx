import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ py: { xs: 3, md: 6 }, pb: { xs: 10, md: 6 }, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
          {/* Logo & Tagline */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: { xs: 'center', md: 'flex-start' }, mb: 1 }}>
              <Box component="img" src="/logo-circle.jpeg" alt="CADS Logo" sx={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,193,7,0.3)' }} />
              <Typography variant="h6" sx={{ fontWeight: 800, background: 'linear-gradient(135deg, #FFC107, #FFD54F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '1.1rem' }}>
                CADS
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)', display: 'block' }}>
              Createch Art & Design Studio
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.65rem' }}>
              Creative Aptitude Training • Portfolio Development • Drawing & Visualization
            </Typography>
          </Box>

          {/* Social Links */}
          <Stack direction="row" spacing={1}>
            <IconButton href="https://www.instagram.com/createch_art_and_design_studio" target="_blank" aria-label="Instagram"
              sx={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)', '&:hover': { color: '#E1306C', borderColor: '#E1306C40', background: 'rgba(225,48,108,0.08)' } }}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com/profile.php?id=61579503286534" target="_blank" aria-label="Facebook"
              sx={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)', '&:hover': { color: '#1877F2', borderColor: '#1877F240', background: 'rgba(24,119,242,0.08)' } }}>
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Box>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.04)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
            © {year} CADS – Createch Art & Design Studio. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
            To make websites like this contact 9954910574.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
