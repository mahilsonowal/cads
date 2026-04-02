import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DevicesIcon from '@mui/icons-material/Devices';
import CategoryIcon from '@mui/icons-material/Category';
import TextureIcon from '@mui/icons-material/Texture';
import MovieIcon from '@mui/icons-material/Movie';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ChairIcon from '@mui/icons-material/Chair';
import PaletteIcon from '@mui/icons-material/Palette';
import useScrollAnimation from '../hooks/useScrollAnimation';
import PrintIcon from '@mui/icons-material/Print';
import HandymanIcon from '@mui/icons-material/Handyman';
import SchoolIcon from '@mui/icons-material/School';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const courses = [
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
const Courses = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <Box
      id="courses"
      component="section"
      ref={sectionRef}
      sx={{
        py: { xs: 5, md: 12 },
        position: 'relative',
      }}
    >
      {/* Background accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 193, 7, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
            Our Programs
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.6rem', md: '3rem' },
              color: '#FFFFFF',
              mb: 2,
            }}
          >
            What we teaches
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
            Build your creative skills through structured programs in painting, printmaking, craft, sculpture, and visual media.
          </Typography>
        </Box>

        {/* Course Cards Grid */}
        <Grid container spacing={{ xs: 1.5, md: 3 }}>
          {courses.map((course, index) => {
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
                    borderRadius: { xs: 2, md: 3 },
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      border: `1px solid ${course.color}20`,
                      boxShadow: `0 20px 60px ${course.color}15`,
                      '& .course-icon': {
                        transform: 'scale(1.15) rotate(5deg)',
                        color: course.color,
                      },
                      '& .course-glow': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Hover glow effect */}
                  <Box
                    className="course-glow"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, transparent, ${course.color}, transparent)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    }}
                  />

                  <CardContent sx={{ p: { xs: 2, md: 3.5 }, '&:last-child': { pb: { xs: 2, md: 3.5 } } }}>
                    <Box
                      className="course-icon"
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
                      <IconComponent
                        sx={{
                          fontSize: { xs: 20, md: 28 },
                          color: `${course.color}CC`,
                          transition: 'color 0.4s ease',
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h6"
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
                        color: 'rgba(255,255,255,0.45)',
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
      </Container>
    </Box>
  );
};

export default Courses;
