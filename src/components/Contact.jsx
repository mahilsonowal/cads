import { Box, Container, Typography, Button, Grid, Stack, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const phone = '7076700689';
  const whatsappLink = `https://wa.me/91${phone}?text=Hi%20CADS!%20I'm%20interested%20in%20design%20coaching.%20Please%20share%20details.`;
  const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5!2d91.7862!3d26.1445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA4JzQwLjIiTiA5McKwNDcnMTAuMyJF!5e0!3m2!1sen!2sin!4v1';

  return (
    <Box id="contact" component="section" ref={sectionRef} sx={{ py: { xs: 5, md: 12 }, pb: { xs: 12, md: 12 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 8 }, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s ease' }}>
          <Typography variant="overline" sx={{ color: '#FFC107', fontSize: '0.85rem', letterSpacing: '0.2em', fontWeight: 600, mb: 1, display: 'block' }}>
            Get In Touch
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '3rem' }, color: '#FFF', mb: 2 }}>
            Visit Us or Call Now
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 500, mx: 'auto' }}>
            Ready to begin your design journey? Reach out today for a free consultation.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-40px)', transition: 'all 0.8s ease 0.2s' }}>
              {/* Phone */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2 }, mb: { xs: 2, md: 3 }, p: { xs: 2, md: 3 }, borderRadius: { xs: 2, md: 3 }, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s', '&:hover': { borderColor: 'rgba(255,193,7,0.2)', background: 'rgba(255,193,7,0.03)' } }}>
                <Box sx={{ width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 }, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #FFC107, #FFD54F)', flexShrink: 0 }}>
                  <PhoneIcon sx={{ color: '#000', fontSize: 22 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', mb: 0.3 }}>Call Us</Typography>
                  <Typography variant="h6" component="a" href={`tel:${phone}`} sx={{ color: '#FFF', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', '&:hover': { color: '#FFC107' } }}>
                    {phone}
                  </Typography>
                </Box>
              </Box>

              {/* Address */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 1.5, md: 2 }, mb: { xs: 2, md: 3 }, p: { xs: 2, md: 3 }, borderRadius: { xs: 2, md: 3 }, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s', '&:hover': { borderColor: 'rgba(255,193,7,0.2)', background: 'rgba(255,193,7,0.03)' } }}>
                <Box sx={{ width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 }, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #4ECDC4, #44E5DB)', flexShrink: 0 }}>
                  <LocationOnIcon sx={{ color: '#000', fontSize: 22 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', mb: 0.3 }}>Address</Typography>
                  <Typography variant="body1" sx={{ color: '#FFF', fontWeight: 500, lineHeight: 1.5 }}>
                    Ward Number 44, Ganeshguri,<br />Guwahati, Assam 781006
                  </Typography>
                </Box>
              </Box>

              {/* Action Buttons */}
              <Stack spacing={2}>
                <Button variant="contained" color="primary" fullWidth href={whatsappLink} target="_blank" startIcon={<WhatsAppIcon />}
                  sx={{ py: 1.5, fontSize: '1rem', background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 20px rgba(37,211,102,0.3)', '&:hover': { background: 'linear-gradient(135deg, #128C7E, #075E54)', boxShadow: '0 6px 30px rgba(37,211,102,0.4)', transform: 'translateY(-2px)' } }}>
                  Chat on WhatsApp
                </Button>
                <Button variant="outlined" color="primary" fullWidth href={`tel:${phone}`} startIcon={<PhoneIcon />} sx={{ py: 1.5, fontSize: '1rem' }}>
                  Call Now
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Map */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(40px)', transition: 'all 0.8s ease 0.4s', height: '100%', minHeight: { xs: 220, md: 420 }, borderRadius: { xs: 2, md: 4 }, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', position: 'relative' }}>
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)', position: 'absolute', top: 0, left: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CADS Location - Ganeshguri, Guwahati"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Floating WhatsApp button */}
      <IconButton href={whatsappLink} target="_blank" aria-label="Chat on WhatsApp"
        sx={{ position: 'fixed', bottom: { xs: 80, md: 24 }, right: { xs: 16, md: 24 }, width: { xs: 52, md: 60 }, height: { xs: 52, md: 60 }, background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#FFF', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', zIndex: 1200, animation: 'pulse 2s ease-in-out infinite',
          '&:hover': { background: 'linear-gradient(135deg, #128C7E, #075E54)', transform: 'scale(1.1)' } }}>
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </IconButton>
    </Box>
  );
};

export default Contact;
