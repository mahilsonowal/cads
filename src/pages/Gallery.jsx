import React, { useState } from 'react';
import { Box, Container, Typography, ImageList, ImageListItem, IconButton, Modal, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileStickyBar from '../components/MobileStickyBar';

const imageFiles = [
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

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

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
      <MobileStickyBar />
    </>
  );
};

export default Gallery;
