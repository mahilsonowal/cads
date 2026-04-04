import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import useScrollAnimation from '../hooks/useScrollAnimation';

const softwareTools = [
  {
    name: 'AutoCAD',
    description: 'Precision in 2D drafting and documentation.',
    imgSrc: '/autocad1.png',
    fallbackColor: '#D41F27',
    bgGradient: 'linear-gradient(135deg, #D41F27 0%, #FF4444 100%)'
  },
  {
    name: 'SketchUp 3D',
    description: 'Intuitive 3D modeling for architecture and interior.',
    imgSrc: '/sketchup.jpeg',
    fallbackColor: '#005F9E',
    bgGradient: 'linear-gradient(135deg, #005F9E 0%, #0088CC 100%)'
  },
  {
    name: 'Lumion',
    description: 'Real-time 3D rendering for architecture and interior.',
    imgSrc: '/lumion.png',
    fallbackColor: '#005F9E',
    bgGradient: 'linear-gradient(135deg, #005F9E 0%, #0088CC 100%)'
  },
  {
    name: 'V-Ray',
    description: 'Advanced rendering engine for photorealistic visualizations.',
    imgSrc: '/vray.png',
    fallbackColor: '#005F9E',
    bgGradient: 'linear-gradient(135deg, #005F9E 0%, #0088CC 100%)'
  }
];

const SoftwareSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 3, md: 3 },
        backgroundColor: '#0F0F0F',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 7 },
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: '#FFC107',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              fontWeight: 600,
              mb: 1,
              display: 'block',
            }}
          >
            Our Tools
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '1.5rem', lg: '1.75rem' },
              color: '#FFFFFF',
              fontWeight: 700
            }}
          >
            Software We <span style={{ color: '#FFC107' }}>Use</span>
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2.5, sm: 3, md: 3 }} justifyContent="center">
          {softwareTools.map((tool, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={tool.name}
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: 'rgba(20, 20, 20, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 3,
                  p: { xs: 3, md: 3.5 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: tool.bgGradient,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    backgroundColor: 'rgba(25, 25, 25, 0.8)',
                    border: `1px solid ${tool.fallbackColor}40`,
                    '&::before': {
                      opacity: 1,
                    },
                    '& .software-icon-box': {
                      transform: 'scale(1.05)',
                      boxShadow: `0 8px 24px ${tool.fallbackColor}30`,
                    }
                  }
                }}
              >
                <Box
                  className="software-icon-box"
                  sx={{
                    width: { xs: 70, md: 80 },
                    height: { xs: 70, md: 80 },
                    backgroundColor: '#FFFFFF',
                    borderRadius: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1.8,
                    mb: 2.5,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={tool.imgSrc}
                    alt={tool.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      // Fallback to colored box with initials if image fails
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = tool.bgGradient;
                      e.target.parentElement.innerHTML = `<span style="color: white; font-size: 24px; font-weight: 700;">${tool.name.charAt(0)}</span>`;
                    }}
                  />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: '#FFFFFF',
                    fontWeight: 700,
                    mb: 1.5,
                    fontSize: { xs: '1.05rem', md: '1.15rem' }
                  }}
                >
                  {tool.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.85rem', md: '0.88rem' }
                  }}
                >
                  {tool.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SoftwareSection;