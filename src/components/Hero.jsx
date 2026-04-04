import { Box, Container, Typography, Button, Chip, Stack, useMediaQuery, useTheme } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 11, md: 0 },
        pb: { xs: 4, md: 0 },
      }}
    >
      {/* Background gradient orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: { xs: '400px', md: '700px' },
          height: { xs: '400px', md: '700px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 193, 7, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: { xs: '350px', md: '500px' },
          height: { xs: '350px', md: '500px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 160, 0, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          animation: 'float 10s ease-in-out infinite 2s',
        }}
      />

      {/* Decorative grid lines */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 193, 7, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 193, 7, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Diagonal accent line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: { xs: '10%', md: '25%' },
          width: '2px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent, rgba(255, 193, 7, 0.15), transparent)',
          transform: 'rotate(15deg)',
          transformOrigin: 'top',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '700px' },
            animation: 'fadeInUp 1s ease-out',
          }}
        >
          {/* Badge */}
          <Chip
            icon={<StarIcon sx={{ fontSize: 16, color: '#FFC107 !important' }} />}
            label="Guwahati's Premier Design Institute"
            sx={{
              mb: { xs: 1.5, md: 3 },
              backgroundColor: 'rgba(255, 193, 7, 0.08)',
              border: '1px solid rgba(255, 193, 7, 0.2)',
              color: '#FFC107',
              fontWeight: 500,
              fontSize: { xs: '0.75rem', md: '0.85rem' },
              py: 2.5,
              px: 1,
              '& .MuiChip-icon': {
                ml: 1,
              },
            }}
          />

          {/* Main Headline */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.8rem', md: '4rem', lg: '4.5rem' },
              lineHeight: { xs: 1.15, md: 1.1 },
              mb: { xs: 1, md: 2 },
              color: '#FFFFFF',
            }}
          >
            Admission Open for{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFA000 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 3s linear infinite',
              }}
            >
              Design Careers
            </Box>
          </Typography>

          {/* Sub headline */}
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '0.88rem', sm: '1.05rem', md: '1.35rem' },
              color: 'rgba(255, 255, 255, 0.6)',
              fontWeight: 400,
              mb: { xs: 2.5, md: 4 },
              lineHeight: 1.5,
              maxWidth: '550px',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Prepare for{' '}
            <Box component="span" sx={{ color: '#FFC107', fontWeight: 600 }}>
              NID, NIFT, UCEED, NATA
            </Box>{' '}
            &
            <Box component="span" sx={{ color: '#FFC107', fontWeight: 600 }}> Fine Arts</Box> with expert coaching, portfolio guidance, and proven results.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, md: 2 }}
            sx={{ mb: { xs: 3, md: 5 } }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/#contact')}
              endIcon={<ArrowForwardIcon />}
              startIcon={<AppRegistrationIcon />}
              sx={{
                py: { xs: 1.5, md: 1.8 },
                px: { xs: 3, md: 4 },
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                minHeight: 48,
              }}
            >
              Register Now
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              href="tel:7076700689"
              startIcon={<PhoneIcon />}
              sx={{
                py: { xs: 1.5, md: 1.8 },
                px: { xs: 3, md: 4 },
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                minHeight: 48,
              }}
            >
              Call Now — 7076700689
            </Button>
          </Stack>

          {/* Trust badges */}
          <Stack
            direction="row"
            spacing={{ xs: 2, md: 3 }}
            divider={
              <Box
                sx={{
                  width: '1px',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  alignSelf: 'stretch',
                }}
              />
            }
            sx={{
              animation: 'fadeInUp 1s ease-out 0.5s both',
            }}
          >
            {[
              { number: '500+', label: 'Students Trained' },
              { number: '95%', label: 'Success Rate' },
              { number: '10+', label: 'Years Legacy' },
            ].map((stat) => (
              <Box key={stat.label}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: '#FFC107',
                    fontSize: { xs: '1.3rem', md: '2rem' },
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: { xs: '0.7rem', md: '0.8rem' },
                    mt: 0.5,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Floating logo on right for desktop */}
        {!isMobile && (
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              animation: 'float 6s ease-in-out infinite',
            }}
          >
            <Box
              component="img"
              src="/logo-circle.jpeg"
              alt="CADS Logo"
              sx={{
                width: 280,
                height: 280,
                borderRadius: '50%',
                border: '3px solid rgba(255, 193, 7, 0.2)',
                boxShadow: '0 0 80px rgba(255, 193, 7, 0.15), 0 0 160px rgba(255, 193, 7, 0.05)',
                opacity: 0.6,
              }}
            />
          </Box>
        )}
      </Container>

      {/* Bottom gradient fade */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to top, #0A0A0A, transparent)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default Hero;
