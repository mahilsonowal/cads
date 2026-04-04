import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import useScrollAnimation from '../hooks/useScrollAnimation';
import BrushIcon from '@mui/icons-material/Brush';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const classesData = [
  {
    title: 'Kids',
    subtitle: 'Beginner Drawing & Coloring',
    description: 'A fun and engaging introduction to art. Kids learn basic shapes, colors, and unleash their creativity.',
    icon: FaceRetouchingNaturalIcon,
    color: '#1E3A8A',
    gradient: 'linear-gradient(90deg, #1E3A8A 0%, #FFC107 50%, #000000 100%)'
  },
  {
    title: 'Teens',
    subtitle: 'Creative & Portfolio Development',
    description: 'Structured programs focusing on advanced techniques, digital art introductions, and portfolio building.',
    icon: BrushIcon,
    color: '#FFC107',
    gradient: 'linear-gradient(90deg, #772f45ff 0%, #FFC107 50%, #000000 100%)'
  },
  {
    title: 'Adults',
    subtitle: 'Fine Arts & Hobby Classes',
    description: 'Relaxing environment for adults to explore painting, sketching, and fine art as a hobby or passion.',
    icon: PersonOutlineIcon,
    color: '#84FAB0',
    gradient: 'linear-gradient(90deg, #0F766E 0%, #FFC107 50%, #000000 100%)'
  }
];

const ArtClassesSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 4, md: 4 },
        backgroundColor: '#0A0A0A',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '1.4rem', md: '1.75rem' },
            color: '#FFFFFF',
            mb: { xs: 6, md: 10 },
            fontWeight: 600,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          Art Classes for <span style={{ color: '#FFC107' }}>All Age Groups</span>
        </Typography>

        <Grid container spacing={{ xs: 2.5, sm: 3, md: 3 }} justifyContent="center">
          {classesData.map((cls, index) => {
            const Icon = cls.icon;
            return (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                item xs={12} md={4}
                key={cls.title}
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: cls.gradient,
                    borderRadius: 5,
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: `0 20px 40px ${cls.color}50`
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 4, md: 5 }, position: 'relative', zIndex: 1 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                      }}
                    >
                      <Icon sx={{ fontSize: 35, color: '#333' }} />
                    </Box>
                    <Typography variant="h3" sx={{ color: '#1A1A1A', fontWeight: 800, mb: 1, fontSize: '1.5rem' }}>
                      {cls.title}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#333', fontWeight: 600, mb: 2 }}>
                      {cls.subtitle}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(0,0,0,0.7)', lineHeight: 1.6, fontWeight: 500 }}>
                      {cls.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>


      </Container>
    </Box>
  );
};

export default ArtClassesSection;
