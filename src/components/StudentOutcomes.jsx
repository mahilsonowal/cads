import { Box, Container, Typography, Grid } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VerifiedIcon from '@mui/icons-material/Verified';
import useScrollAnimation from '../hooks/useScrollAnimation';

const outcomes = [
  {
    icon: WorkIcon,
    title: 'Portfolio Development',
    description:
      'Build a professional-grade portfolio that stands out in interviews and entrance evaluations.',
    stat: '100%',
    statLabel: 'Portfolio Ready',
    gradient: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
  },
  {
    icon: TrendingUpIcon,
    title: 'Career Guidance',
    description:
      'One-on-one mentorship to help you choose the right design path and career opportunities.',
    stat: '1:1',
    statLabel: 'Mentorship',
    gradient: 'linear-gradient(135deg, #4ECDC4, #44E5DB)',
  },
  {
    icon: AutoAwesomeIcon,
    title: 'Creative Skill Boost',
    description:
      'Sharpen your creative thinking, sketching, visualization & design aptitude skills.',
    stat: '10x',
    statLabel: 'Skill Growth',
    gradient: 'linear-gradient(135deg, #FFC107, #FFD54F)',
  },
  {
    icon: VerifiedIcon,
    title: 'Entrance Exam Success',
    description:
      'Proven track record of students clearing NID, NIFT, UCEED, NATA & other top exams.',
    stat: '95%',
    statLabel: 'Success Rate',
    gradient: 'linear-gradient(135deg, #45B7D1, #5BC8E0)',
  },
];

const StudentOutcomes = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <Box
      id="outcomes"
      component="section"
      ref={sectionRef}
      sx={{
        py: { xs: 5, md: 12 },
        position: 'relative',
        background:
          'linear-gradient(180deg, transparent 0%, rgba(255, 193, 7, 0.015) 50%, transparent 100%)',
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
            Student Benefits
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.6rem', md: '3rem' },
              color: '#FFFFFF',
              mb: 2,
            }}
          >
            What You'll Achieve
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Real outcomes, real growth — here's what our students walk away with.
          </Typography>
        </Box>

        {/* Outcomes Grid */}
        <Grid container spacing={{ xs: 1.5, md: 3 }}>
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <Grid
                size={{ xs: 6, sm: 6 }}
                key={outcome.title}
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.12}s`,
                }}
              >
                <Box
                  sx={{
                    p: { xs: 2, md: 4 },
                    borderRadius: { xs: 2.5, md: 4 },
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: 'rgba(255, 193, 7, 0.15)',
                      boxShadow: '0 20px 60px rgba(255, 193, 7, 0.08)',
                      '& .outcome-stat': {
                        opacity: 0.12,
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  {/* Background stat number */}
                  <Typography
                    className="outcome-stat"
                    sx={{
                      position: 'absolute',
                      top: { xs: 10, md: 15 },
                      right: { xs: 15, md: 25 },
                      fontSize: { xs: '2rem', md: '4rem' },
                      fontWeight: 900,
                      background: outcome.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      opacity: 0.08,
                      lineHeight: 1,
                      transition: 'all 0.4s ease',
                      userSelect: 'none',
                    }}
                  >
                    {outcome.stat}
                  </Typography>

                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Box
                      sx={{
                        width: { xs: 36, md: 44 },
                        height: { xs: 36, md: 44 },
                        borderRadius: { xs: 1.5, md: 2 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: outcome.gradient,
                        mb: { xs: 1.5, md: 2.5 },
                      }}
                    >
                      <IconComponent sx={{ fontSize: { xs: 18, md: 22 }, color: '#000' }} />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#FFFFFF',
                        mb: { xs: 0.5, md: 1 },
                        fontSize: { xs: '0.85rem', md: '1.1rem' },
                      }}
                    >
                      {outcome.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.4)',
                        lineHeight: 1.5,
                        fontSize: { xs: '0.72rem', md: '0.85rem' },
                        mb: { xs: 1, md: 2 },
                        display: { xs: 'none', sm: 'block' },
                      }}
                    >
                      {outcome.description}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        background: outcome.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '0.75rem',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {outcome.stat} {outcome.statLabel}
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

export default StudentOutcomes;
