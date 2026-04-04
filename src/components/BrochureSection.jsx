import { Box, Container, Typography, Grid, Button, Stack, Chip } from '@mui/material';
import useScrollAnimation from '../hooks/useScrollAnimation';
import DownloadIcon from '@mui/icons-material/Download';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BrochureSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  const details = [
    { title: 'AutoCAD', subtitle: '(2D drafting)' },
    { title: 'SketchUp', subtitle: '(3D modeling)' },
    { title: 'Lumion', subtitle: '(rendering)' },
    { title: 'V-Ray', subtitle: '(advanced rendering)' },
  ];

  const highlights = [
    'Internship included',
    'Live project work',
    'Industry expert sessions',
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 3, md: 5 },
        background: 'linear-gradient(to right, #111111, #1a1a1a)',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid
            item xs={12} md={7}
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Typography variant="overline" sx={{ color: '#FFC107', fontWeight: 600, letterSpacing: 2, mb: 2, display: 'block' }}>
              Premium Offering
            </Typography>
            <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, mb: 3 }}>
              Professional Design & Visualization Course
            </Typography>

            <Stack direction="row" spacing={2} mb={4} flexWrap="wrap" useFlexGap>
              <Chip label="Duration: 4 Months (16 Weeks)" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff', fontWeight: 500, mb: 1 }} />
              <Chip label="Mode: Offline / Studio-Based" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff', fontWeight: 500, mb: 1 }} />
            </Stack>

            <Typography variant="h6" sx={{ color: '#fff', mb: 2, fontWeight: 600 }}>What you will learn:</Typography>
            <Grid container spacing={2} mb={4}>
              {details.map((item) => (
                <Grid item xs={6} sm={6} key={item.title}>
                  <Box sx={{ p: 2, backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.05)' }}>
                    <Typography variant="body1" sx={{ color: '#FFC107', fontWeight: 700 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>{item.subtitle}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Typography variant="h6" sx={{ color: '#fff', mb: 2, fontWeight: 600 }}>Course Highlights:</Typography>
            <Stack spacing={1.5} mb={5}>
              {highlights.map((highlight) => (
                <Box key={highlight} sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon sx={{ color: '#4ECDC4', mr: 2, fontSize: 20 }} />
                  <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>{highlight}</Typography>
                </Box>
              ))}
            </Stack>

            <Typography variant="h6" sx={{ color: '#fff', mb: 3, fontWeight: 600 }}>Outcomes: Portfolio | Internship | Certification</Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                href="/Document.pdf" download
                sx={{
                  backgroundColor: '#FFC107',
                  color: '#000',
                  px: 4,
                  py: 1.5,
                  borderRadius: '8px',
                  fontWeight: 700,
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#FFA000' }
                }}
              >
                Download Brochure
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BrochureSection;
