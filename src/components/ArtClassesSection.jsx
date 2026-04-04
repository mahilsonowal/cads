import { Box, Container, Typography, Button } from '@mui/material';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ArtClassesSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <Box
      ref={sectionRef}
      sx={{

        background: 'linear-gradient(135deg, #6B21A8 0%, #FFC107 50%, #000000 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            minHeight: { xs: '300px', sm: '350px', md: '400px' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              color: '#FFFFFF',
              mb: { xs: 2, sm: 3, md: 4 },
              lineHeight: 1.2,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Art Classes for{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FFC107, #FFFFFF)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              All Age Groups
            </span>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.2rem' },
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              lineHeight: 1.7,

              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
            }}
          >
            From kids discovering colors to adults exploring their artistic passion, we offer tailored programs designed to nurture creativity at every stage of artistic development.
          </Typography>


        </Box>
      </Container>
    </Box>
  );
};

export default ArtClassesSection;