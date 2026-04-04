import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import useScrollAnimation from '../hooks/useScrollAnimation';

const exams = [
  {
    name: 'NID',
    fullName: 'National Institute of Design',
    color: '#FF6B6B',
  },
  {
    name: 'NIFT',
    fullName: 'National Institute of Fashion Technology',
    color: '#4ECDC4',
  },
  {
    name: 'UCEED',
    fullName: 'Undergraduate Common Entrance Exam for Design',
    color: '#45B7D1',
  },
  {
    name: 'B.Arch',
    fullName: 'Bachelor of Architecture',
    color: '#96CEB4',
  },
  {
    name: 'NATA',
    fullName: 'National Aptitude Test in Architecture',
    color: '#DDA0DD',
  },
  {
    name: 'Fine Arts',
    fullName: 'BFA / MFA Entrance Preparation',
    color: '#FF8A5C',
  },
];

const EntranceExams = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <Box
      id="exams"
      component="section"
      ref={sectionRef}
      sx={{
        py: { xs: 3, md: 10 },
        position: 'relative',
        background: 'linear-gradient(180deg, transparent 0%, rgba(255, 193, 7, 0.02) 50%, transparent 100%)',
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
            Exam Preparation
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.6rem', md: '3rem' },
              color: '#FFFFFF',
              mb: 2,
            }}
          >
            Entrance Exams We Cover
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
            Structured coaching programs for India's top design & architecture entrance examinations.
          </Typography>
        </Box>

        {/* Exam Badges */}
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={{ xs: 1, md: 2 }}
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
          }}
        >
          {exams.map((exam, index) => (
            <Box
              key={exam.name}
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + index * 0.1}s`,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: { xs: 2, md: 4 },
                  borderRadius: { xs: 2.5, md: 4 },
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${exam.color}15`,
                  minWidth: { xs: '100px', md: '170px' },
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-6px) scale(1.02)',
                    borderColor: `${exam.color}40`,
                    background: `${exam.color}08`,
                    boxShadow: `0 20px 50px ${exam.color}15`,
                    '& .exam-icon': {
                      backgroundColor: `${exam.color}20`,
                      borderColor: `${exam.color}40`,
                    },
                  },
                }}
              >
                <Box
                  className="exam-icon"
                  sx={{
                    width: { xs: 40, md: 56 },
                    height: { xs: 40, md: 56 },
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: `${exam.color}10`,
                    border: `2px solid ${exam.color}25`,
                    mb: { xs: 1, md: 2 },
                    transition: 'all 0.4s ease',
                  }}
                >
                  <SchoolIcon sx={{ color: exam.color, fontSize: { xs: 20, md: 26 } }} />
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: exam.color,
                    fontSize: { xs: '1rem', md: '1.5rem' },
                    mb: 0.5,
                  }}
                >
                  {exam.name}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(255,255,255,0.35)',
                    textAlign: 'center',
                    fontSize: { xs: '0.6rem', md: '0.7rem' },
                    lineHeight: 1.3,
                    maxWidth: { xs: '90px', md: '140px' },
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  {exam.fullName}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        {/* Decorative CTA line */}
        <Box
          sx={{
            mt: { xs: 3, md: 6 },
            textAlign: 'center',

            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.8s',
          }}
        >
          <Chip
            label="Comprehensive study material & mock tests"
            sx={{
              backgroundColor: 'rgba(255, 193, 7, 0.06)',
              border: '1px solid rgba(255, 193, 7, 0.15)',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.8rem',
              py: 2,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default EntranceExams;
