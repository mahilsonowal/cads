import { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import PrintIcon from '@mui/icons-material/Print';
import HandymanIcon from '@mui/icons-material/Handyman';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import SchoolIcon from '@mui/icons-material/School';
import MovieIcon from '@mui/icons-material/Movie';
import ComputerIcon from '@mui/icons-material/Computer';
import GroupsIcon from '@mui/icons-material/Groups';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

const coursesData = [
  {
    title: 'Painting',
    description: 'Learn color theory, brush techniques, and creative expression through painting.',
    icon: PaletteIcon,
    color: '#FF6B6B',
  },
  {
    title: 'Printmaking',
    description: 'Explore techniques like screen printing, etching, and block printing.',
    icon: PrintIcon,
    color: '#4ECDC4',
  },
  {
    title: 'Craft',
    description: 'Hands-on creative work including handmade art, DIY crafts, and materials.',
    icon: HandymanIcon,
    color: '#45B7D1',
  },
  {
    title: 'Sculpture',
    description: 'Create 3D art using clay, wood, and other sculpting materials.',
    icon: ArchitectureIcon,
    color: '#96CEB4',
  },
  {
    title: 'School Projects',
    description: 'Guidance and support for creative and academic school-level projects.',
    icon: SchoolIcon,
    color: '#FFEAA7',
  },
  {
    title: 'Video Editing',
    description: 'Learn editing, transitions, effects, and storytelling using modern tools.',
    icon: MovieIcon,
    color: '#DDA0DD',
  },
];

const CoursesSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <Box
      id="courses"
      component="section"
      ref={sectionRef}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        backgroundColor: '#0A0A0A'
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
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              fontWeight: 600,
              mb: 1,
              display: 'block',
            }}
          >
            What we teach
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
              color: '#FFFFFF',
              mb: 2,
              fontWeight: 700
            }}
          >
            Our Programs
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2.5, sm: 3, md: 3 }}>
          {coursesData.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Grid
                size={{ xs: 6, sm: 6, md: 4 }}
                key={course.title}
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`,
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: 'rgba(20, 20, 20, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 3,
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      border: `1px solid ${course.color}40`,
                      backgroundColor: 'rgba(25, 25, 25, 0.8)',
                      '& .course-icon-circle': {
                        backgroundColor: `${course.color}25`,
                        transform: 'scale(1.05)',
                      },
                    },
                    transition: 'all 0.4s ease'
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 3.5 }, '&:last-child': { pb: { xs: 2, md: 3.5 } } }}>
                    <Box
                      className="course-icon-circle"
                      sx={{
                        width: { xs: 40, md: 56 },
                        height: { xs: 40, md: 56 },
                        borderRadius: { xs: 1.5, md: 2.5 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: `${course.color}12`,
                        border: `1px solid ${course.color}20`,
                        mb: { xs: 1.5, md: 2.5 },
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <IconComponent sx={{ fontSize: { xs: 24, md: 26 }, color: course.color }} />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                        mb: { xs: 0.5, md: 1 },
                      }}
                    >
                      {course.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.5,
                        fontSize: { xs: '0.75rem', md: '0.85rem' },
                        display: { xs: 'none', sm: 'block' },
                      }}
                    >
                      {course.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Course Delivery Options Section */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            mb: { xs: 4, md: 5 },
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(255, 193, 7, 0.05)',
              border: '1px solid rgba(255, 193, 7, 0.2)',
              borderRadius: 3,
              p: { xs: 3.5, md: 4.5 },
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                mb: { xs: 2.5, md: 3 },
                fontSize: { xs: '1.4rem', md: '1.75rem' }
              }}
            >
              Flexible Learning Options
            </Typography>

            <Grid container spacing={{ xs: 2.5, md: 3 }} justifyContent="center" sx={{ mt: { xs: 1, md: 1.5 } }}>
              <Grid item xs={12} sm={6} md={5} lg={4.5}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 3,
                    p: { xs: 2.5, md: 3 },
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255, 193, 7, 0.3)',
                      boxShadow: '0 10px 30px rgba(255, 193, 7, 0.1)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 48, md: 52 },
                      height: { xs: 48, md: 52 },
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 193, 7, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      mb: 2,
                    }}
                  >
                    <GroupsIcon sx={{ fontSize: { xs: 26, md: 28 }, color: '#FFC107' }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#FFC107',
                      fontWeight: 600,
                      mb: 1.5,
                      fontSize: { xs: '1.05rem', md: '1.15rem' }
                    }}
                  >
                    Offline Classes
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.88rem', md: '0.92rem' }
                    }}
                  >
                    In-person interactive sessions with hands-on guidance and personalized attention
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={5} lg={4.5}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 3,
                    p: { xs: 2.5, md: 3 },
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255, 193, 7, 0.3)',
                      boxShadow: '0 10px 30px rgba(255, 193, 7, 0.1)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 48, md: 52 },
                      height: { xs: 48, md: 52 },
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 193, 7, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      mb: 2,
                    }}
                  >
                    <ComputerIcon sx={{ fontSize: { xs: 26, md: 28 }, color: '#FFC107' }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#FFC107',
                      fontWeight: 600,
                      mb: 1.5,
                      fontSize: { xs: '1.05rem', md: '1.15rem' }
                    }}
                  >
                    Online Classes
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.88rem', md: '0.92rem' }
                    }}
                  >
                    Learn from anywhere with live virtual classes and flexible scheduling options
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                mt: { xs: 3, md: 3.5 },
                fontStyle: 'italic',
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                maxWidth: '700px',
                margin: '0 auto',
                marginTop: { xs: 3, md: 3.5 }
              }}
            >
              All our courses are available in both offline and online formats. Choose what works best for you!
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 5 } }}>
          <Button
            variant="contained"
            onClick={() => navigate('/courses')}
            endIcon={<ArrowRightAltIcon />}
            sx={{
              backgroundColor: '#FFC107',
              color: '#000',
              px: { xs: 4, md: 5.5 },
              py: { xs: 1.3, md: 1.5 },
              borderRadius: '50px',
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: '0 10px 30px rgba(255, 193, 7, 0.3)',
              '&:hover': {
                backgroundColor: '#FFA000',
                transform: 'translateY(-2px)',
                boxShadow: '0 15px 40px rgba(255, 193, 7, 0.4)',
              },
              transition: 'all 0.3s ease'
            }}
          >
            View Course Duration
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CoursesSection;