import { Box, Container, Typography, Grid } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import GroupsIcon from '@mui/icons-material/Groups';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PersonIcon from '@mui/icons-material/Person';
import useScrollAnimation from '../hooks/useScrollAnimation';

const facilities = [
  {
    icon: EmojiEventsIcon,
    title: 'Scholarship Available',
    description: 'Merit-based scholarships to support deserving students in their design journey.',
    color: '#FFD700',
  },
  {
    icon: SchoolIcon,
    title: 'Free 3 Demo Classes',
    description: 'Experience our teaching methodology before you commit. No obligations.',
    color: '#4ECDC4',
  },
  {
    icon: QuizIcon,
    title: 'Monthly Tests',
    description: 'Regular assessments to track progress and identify improvement areas.',
    color: '#FF6B6B',
  },
  {
    icon: GroupsIcon,
    title: 'Friendly Environment',
    description: 'A welcoming, creative atmosphere that nurtures talent and builds confidence.',
    color: '#45B7D1',
  },
  {
    icon: Diversity3Icon,
    title: 'Group Discussion',
    description: 'Interactive sessions with senior students for peer learning and mentorship.',
    color: '#96CEB4',
  },
  {
    icon: PersonIcon,
    title: 'Visiting Faculty',
    description: 'Learn from industry professionals and experienced design educators.',
    color: '#DDA0DD',
  },
];

const Facilities = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <Box
      id="facilities"
      component="section"
      ref={sectionRef}
      sx={{
        py: { xs: 3, md: 1 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 3, md: 8 },
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: '#FFC107',
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              fontWeight: 600,
              mb: 1,
              display: 'block',
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.6rem', md: '3rem' },
              color: '#FFFFFF',
              mb: 2,
            }}
          >
            What Makes CADS Different
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '0.85rem', md: '1.05rem' },
            }}
          >
            We create an ecosystem where creativity meets discipline, and every student
            gets personalized attention.
          </Typography>
        </Box>

        {/* Facilities Grid */}
        <Grid container spacing={{ xs: 1.5, md: 3 }}>
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <Grid
                size={{ xs: 6, sm: 6, md: 4 }}
                key={facility.title}
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    flexDirection: { xs: 'column', md: 'row' },
                    textAlign: { xs: 'center', md: 'left' },
                    gap: { xs: 1.5, md: 2.5 },
                    p: { xs: 2, md: 3 },
                    borderRadius: { xs: 2, md: 3 },
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: '100%',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.04)',
                      borderColor: `${facility.color}20`,
                      transform: 'translateY(-4px)',
                      '& .facility-icon-wrap': {
                        borderColor: `${facility.color}40`,
                        backgroundColor: `${facility.color}15`,
                      },
                    },
                  }}
                >
                  <Box
                    className="facility-icon-wrap"
                    sx={{
                      flexShrink: 0,
                      width: { xs: 36, md: 48 },
                      height: { xs: 36, md: 48 },
                      borderRadius: { xs: 1.5, md: 2 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: `${facility.color}08`,
                      border: `1px solid ${facility.color}15`,
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <IconComponent
                      sx={{ fontSize: { xs: 18, md: 24 }, color: facility.color }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '0.82rem', md: '1rem' },
                        color: '#FFFFFF',
                        mb: { xs: 0, md: 0.5 },
                      }}
                    >
                      {facility.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.4)',
                        lineHeight: 1.5,
                        fontSize: { xs: '0.72rem', md: '0.85rem' },
                        display: { xs: 'none', md: 'block' },
                      }}
                    >
                      {facility.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Facilities;
