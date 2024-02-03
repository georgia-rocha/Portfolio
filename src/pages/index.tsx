import React from 'react';
import { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import floral from '../../public/floral-card.jpeg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import About from '@/components/About';
import Formation from '@/components/Formation';
import Contact from '@/components/Contact';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@/components/Menu';

const Profile: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const backgroundStyle = {
    backgroundImage: `url(${floral.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    textAlign: 'justify',
  };

  const socialLinks = {
    linkedin: 'https://linkedin.com/in/georgia-rocha-dev',
    github: 'https://github.com/georgia-rocha',
    email: 'https://mail.google.com/mail/?view=cm&fs=1&to=georgiab543@gmail.com',
    whatsapp: 'https://wa.me/5582996525876',
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
       <Box sx={{ position: 'fixed', top: '0', right: '0', margin: '1rem', zIndex: '1000' }}>
        <MenuIcon style={{ color: 'black', cursor: 'pointer' }} fontSize="large" onClick={handleMenuToggle} />
        {isMenuOpen && (
          <Menu onClose={handleMenuToggle} />
        )}
      </Box>
      <Box sx={backgroundStyle}>
        <Typography variant='h4' sx={{ marginTop: { xs: '8rem', md: '15rem' }, margin: { xs: '2rem' }, background: 'rgba(255, 255, 255, 0.5)', padding: { xs: '1rem', md: '3rem' }, borderRadius: '1rem', fontFamily: 'monospace' }}>
          Olá,
          <br />
          Meu nome é Georgia Rocha e eu sou <span>DESENVOLVEDORA FULLSTACK!</span>
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '12px' }}>
          <Link href={socialLinks.linkedin} target="_blank" rel="noopener" style={{ marginRight: '12px' }}>
            <LinkedInIcon style={{ color: 'black' }} fontSize="large" />
          </Link>
          <Link href={socialLinks.github} target="_blank" rel="noopener" style={{ marginRight: '12px' }}>
            <GitHubIcon style={{ color: 'black' }} fontSize="large" />
          </Link>
          <Link href={socialLinks.email} target="_blank" rel="noopener" style={{ marginRight: '12px' }}>
            <EmailIcon style={{ color: 'black' }} fontSize="large" />
          </Link>
          <Link href={socialLinks.whatsapp} target="_blank" rel="noopener" style={{ marginRight: '12px' }}>
            <WhatsAppIcon style={{ color: 'black' }} fontSize="large" />
          </Link>
        </Box>
      </Box>
      <About />
      <Formation />
      <Contact />
    </Box>
  );
};
export default Profile;