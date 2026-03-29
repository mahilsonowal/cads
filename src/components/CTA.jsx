import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <Box
      id="cta"
      component="section"
      ref={sectionRef}
      sx={{
        py: { xs: 5, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,160,0,0.04) 50%, rgba(255,193,7,0.08) 100%)',
        }}
      />
      <Box sx={{ position: 'absolute', top: '-50%', right: '-20%', width: 500, height: 500, borderRadius: '50%', border: '1px solid rgba(255,193,7,0.08)', pointerEvents: 'none' }} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)' }}>
          <Typography variant="overline" sx={{ color: '#FFC107', fontSize: '0.85rem', letterSpacing: '0.2em', fontWeight: 600, mb: 1, display: 'block' }}>
            Your Journey Starts Here
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.2rem', md: '3.2rem' }, color: '#FFF', mb: { xs: 1.5, md: 2 }, lineHeight: 1.2 }}>
            Start Your Career in{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #FFC107, #FFD54F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Art, Design & Architecture
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', mb: { xs: 3, md: 5 }, maxWidth: 500, mx: 'auto', fontSize: { xs: '0.85rem', md: '1rem' } }}>
            Don't wait — seats are filling fast. Join CADS and take the first step towards your dream design career today.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button variant="contained" color="primary" size="large" onClick={() => navigate('/#contact')} endIcon={<ArrowForwardIcon />} startIcon={<AppRegistrationIcon />}
              sx={{ py: { xs: 1.5, md: 2 }, px: { xs: 4, md: 5 }, fontSize: { xs: '0.95rem', md: '1.05rem' }, minHeight: 48, boxShadow: '0 8px 32px rgba(255,193,7,0.3)', animation: isVisible ? 'pulse 2s ease-in-out infinite 1s' : 'none' }}>
              Register Now — It's Free
            </Button>
          </Stack>
          <Typography variant="caption" sx={{ display: 'block', mt: 3, color: 'rgba(255,193,7,0.6)', fontSize: '0.8rem', fontWeight: 500 }}>
            ✦ Limited seats available for 2026 batch ✦ 3 Free Demo Classes
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
