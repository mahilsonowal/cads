import { Box, Container, Typography } from '@mui/material';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Pick a curated selection of new studio photos for the photo strip
const stripPhotos = [
  "WhatsApp Image 2026-06-15 at 3.01.30 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.32 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.34 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.35 PM (1).jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.36 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.37 PM.jpeg",
];

const ArtClassesSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <Box
      ref={sectionRef}
      sx={{
        background: 'linear-gradient(150deg, #1a0533 0%, #3b0f72 30%, #7c3f00 70%, #000000 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 6, md: 10 },
        pb: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 193, 7, 0.08) 0%, transparent 55%)',
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
            pb: { xs: 5, md: 8 },
          }}
        >
          {/* Overline label */}
          <Typography
            variant="overline"
            sx={{
              color: '#FFC107',
              fontSize: '0.8rem',
              letterSpacing: '0.25em',
              fontWeight: 700,
              mb: 2,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease',
            }}
          >
            Open to Everyone
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              color: '#FFFFFF',
              mb: { xs: 2, sm: 3, md: 3 },
              lineHeight: 1.15,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Art Classes for{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #FFC107, #FFD54F, #FFFFFF)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              All Age Groups
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: '580px',
              lineHeight: 1.8,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
            }}
          >
            From kids discovering colors to adults exploring their artistic passion, we offer tailored programs designed to nurture creativity at every stage of life.
          </Typography>
        </Box>
      </Container>

      {/* Scrolling Photo Strip — real studio photos */}
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          pb: 0,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease 0.3s',
        }}
      >
        {/* Fade edges */}
        <Box sx={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: { xs: 40, md: 100 },
          background: 'linear-gradient(to right, #1a0533, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <Box sx={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: { xs: 40, md: 100 },
          background: 'linear-gradient(to left, #000, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        {/* Auto-scrolling row */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            animation: 'scrollStrip 28s linear infinite',
            width: 'max-content',
            '@keyframes scrollStrip': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-50%)' },
            },
            '&:hover': { animationPlayState: 'paused' },
          }}
        >
          {/* Duplicate to create seamless loop */}
          {[...stripPhotos, ...stripPhotos].map((photo, i) => (
            <Box
              key={i}
              component="img"
              src={`/image/${photo}`}
              alt={`CADS studio ${i + 1}`}
              sx={{
                height: { xs: 180, md: 260 },
                width: { xs: 240, md: 360 },
                objectFit: 'cover',
                borderRadius: '12px 12px 0 0',
                flexShrink: 0,
                display: 'block',
                filter: 'brightness(0.88) saturate(1.1)',
                transition: 'filter 0.3s ease, transform 0.3s ease',
                '&:hover': {
                  filter: 'brightness(1) saturate(1.2)',
                  transform: 'scale(1.02)',
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ArtClassesSection;