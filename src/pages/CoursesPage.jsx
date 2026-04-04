import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const CoursesPage = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: 'Full Course',
      duration: '1 Year',
      description: 'Comprehensive curriculum covering all aspects from basics to advanced techniques.',
      color: '#FF6B6B'
    },
    {
      title: 'Crash Course',
      duration: '6 Months',
      description: 'Accelerated learning focusing on core design principles and essential tools.',
      color: '#4ECDC4'
    },
    {
      title: 'Crash Course',
      duration: '3 Months',
      description: 'Intensive skills bootcamp for rapid portfolio development.',
      color: '#45B7D1'
    },
    {
      title: 'Crash Course',
      duration: '1 Month',
      description: 'Short-term introductory workshop for beginners.',
      color: '#FFC107'
    }
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ pt: 15, pb: 10, minHeight: '80vh', backgroundColor: '#0A0A0A' }}>
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, '&:hover': { color: '#fff' } }}
          >
            Back
          </Button>

          <Typography variant="h2" sx={{ color: '#fff', mb: 2, fontSize: { xs: '2rem', md: '3.5rem' }, fontWeight: 700 }}>
            Course <span style={{ color: '#FFC107' }}>Durations</span>
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 6, maxWidth: '600px', fontSize: '1.1rem' }}>
            Choose a timeframe that suits your schedule. We offer flexible learning tracks for students, professionals, and hobbyists.
          </Typography>

          <Grid container spacing={{ xs: 1.5, md: 3 }}>
            {courses.map((course, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      borderColor: course.color,
                      boxShadow: `0 10px 30px ${course.color}20`
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: `${course.color}15`,
                        color: course.color,
                        mb: 3
                      }}
                    >
                      <CalendarMonthIcon />
                    </Box>
                    <Typography variant="h5" sx={{ color: '#fff', fontWeight: 600, mb: 1 }}>
                      {course.title}
                    </Typography>
                    <Typography variant="h4" sx={{ color: course.color, fontWeight: 700, mb: 2 }}>
                      {course.duration}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                      {course.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default CoursesPage;
