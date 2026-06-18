import React, { useState, useRef } from 'react';
import { Box, Container, Typography, ImageList, ImageListItem, IconButton, Modal, useMediaQuery, useTheme, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileStickyBar from '../components/MobileStickyBar';

const imageFiles = [
  // Latest studio photos — June 2026
  "WhatsApp Image 2026-06-15 at 3.01.30 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.31 PM (1).jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.31 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.32 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.33 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.34 PM (1).jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.34 PM (2).jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.34 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.35 PM (1).jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.35 PM (2).jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.35 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.36 PM (1).jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.36 PM (2).jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.36 PM.jpeg",
  "WhatsApp Image 2026-06-15 at 3.01.37 PM.jpeg",
  // Original studio photos — March 2026
  "WhatsApp Image 2026-03-30 at 12.08.40 AM (1).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.40 AM (2).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.40 AM (3).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.40 AM.jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.41 AM (1).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.41 AM (2).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.41 AM.jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.42 AM (1).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.42 AM (2).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.42 AM (3).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.42 AM.jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.43 AM (1).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.43 AM (2).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.43 AM.jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.44 AM (1).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.44 AM (2).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.44 AM.jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.45 AM (1).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.45 AM (2).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.45 AM (3).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.45 AM.jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.46 AM (1).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.46 AM (2).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.46 AM (3).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.46 AM.jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.47 AM (1).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.47 AM (2).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.47 AM.jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.48 AM (1).jpeg",
  "WhatsApp Image 2026-03-30 at 12.08.48 AM.jpeg",
  "WhatsApp Image 2026-03-30 at 12.09.16 AM (1).jpeg",
  "WhatsApp Image 2026-03-30 at 12.09.16 AM.jpeg"
];

const VIDEO_FILE = "WhatsApp Video 2026-06-15 at 3.01.33 PM.mp4";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleVideoPlay = () => {
    setVideoPlaying(true);
    videoRef.current?.play();
  };

  // Responsive columns for Masonry layout
  let cols = 3;
  if (isMobile) cols = 1;
  else if (isTablet) cols = 2;

  return (
    <>
      <Navbar />
      <Box
        component="section"
        sx={{
          py: { xs: 12, md: 16 },
          position: 'relative',
          minHeight: '100vh',
          backgroundColor: '#0A0A0A',
        }}
      >
        <Container maxWidth="lg">
          {/* Header section with back button */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 4, md: 6 } }}>
            <IconButton
              onClick={() => navigate('/')}
              sx={{
                color: '#FFC107',
                mr: 2,
                border: '1px solid rgba(255, 193, 7, 0.3)',
                '&:hover': { background: 'rgba(255, 193, 7, 0.1)' }
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Box>
              <Typography variant="overline" sx={{ color: '#FFC107', fontSize: '0.85rem', letterSpacing: '0.2em', fontWeight: 600, display: 'block' }}>
                Life at CADS
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#FFFFFF' }}>
                Our Cozy Studio
              </Typography>
            </Box>
          </Box>

          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', mb: 6, maxWidth: '600px' }}>
            Take a look inside our creative space where future designers train, collaborate, and bring their ideas to life.
          </Typography>

          {/* Featured Video Section */}
          <Box sx={{ mb: { xs: 6, md: 10 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Typography variant="overline" sx={{ color: '#FFC107', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 600 }}>
                Studio Video
              </Typography>
              <Chip
                label="NEW"
                size="small"
                sx={{
                  background: 'linear-gradient(135deg, #FFC107, #FF8F00)',
                  color: '#000',
                  fontWeight: 700,
                  fontSize: '0.65rem',
                  height: 20,
                  letterSpacing: '0.05em',
                }}
              />
            </Box>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                background: '#111',
                border: '1px solid rgba(255, 193, 7, 0.15)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,193,7,0.05)',
                aspectRatio: { xs: '16/9', md: '16/7' },
              }}
            >
              <video
                ref={videoRef}
                src={`/image/${VIDEO_FILE}`}
                controls
                playsInline
                preload="metadata"
                poster={`/image/WhatsApp Image 2026-06-15 at 3.01.33 PM.jpeg`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Play overlay — hidden once playing */}
              {!videoPlaying && (
                <Box
                  onClick={handleVideoPlay}
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 100%)',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease',
                    '&:hover': { background: 'rgba(0,0,0,0.4)' },
                    '&:hover .play-icon': { transform: 'scale(1.12)', color: '#FFD54F' },
                  }}
                >
                  <PlayCircleFilledIcon
                    className="play-icon"
                    sx={{
                      fontSize: { xs: 64, md: 90 },
                      color: '#FFC107',
                      filter: 'drop-shadow(0 4px 24px rgba(255,193,7,0.5))',
                      transition: 'all 0.3s ease',
                      mb: 1,
                    }}
                  />
                  <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: { xs: '0.9rem', md: '1rem' }, letterSpacing: '0.05em' }}>
                    Watch Studio Tour
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>

          {/* Photo Count Badge */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="overline" sx={{ color: '#FFC107', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 600 }}>
              Photo Gallery
            </Typography>
            <Chip
              label={`${imageFiles.length} Photos`}
              size="small"
              sx={{
                background: 'rgba(255,193,7,0.1)',
                border: '1px solid rgba(255,193,7,0.2)',
                color: '#FFC107',
                fontWeight: 600,
                fontSize: '0.7rem',
                height: 22,
              }}
            />
          </Box>

          {/* Masonry Image Gallery */}
          <ImageList variant="masonry" cols={cols} gap={16}>
            {imageFiles.map((item, index) => (
              <ImageListItem
                key={index}
                onClick={() => setSelectedImg(`/image/${item}`)}
                sx={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: 3,
                  '&:hover img': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                <img
                  src={`/image/${item}?w=248&fit=crop&auto=format`}
                  srcSet={`/image/${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={`CADS Studio ${index + 1}`}
                  loading="lazy"
                  style={{
                    borderRadius: '12px',
                    transition: 'transform 0.4s ease',
                    display: 'block',
                    width: '100%',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>

        {/* Fullscreen Image Modal */}
        <Modal
          open={!!selectedImg}
          onClose={() => setSelectedImg(null)}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1400 }}
        >
          <Box sx={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', outline: 'none' }}>
            <IconButton
              onClick={() => setSelectedImg(null)}
              sx={{
                position: 'absolute',
                top: -40,
                right: 0,
                color: '#FFF',
                background: 'rgba(0,0,0,0.5)',
                '&:hover': { background: '#FFC107', color: '#000' }
              }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImg && (
              <img
                src={selectedImg}
                alt="Enlarged Studio View"
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                }}
              />
            )}
          </Box>
        </Modal>
      </Box>
      <Footer />

    </>
  );
};

export default Gallery;
