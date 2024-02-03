import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact: React.FC = () => {
  const socialLinks = {
    linkedin: 'https://linkedin.com/in/georgia-rocha-dev',
    github: 'https://github.com/georgia-rocha',
    email: 'https://mail.google.com/mail/?view=cm&fs=1&to=georgiab543@gmail.com',
    whatsapp: 'https://wa.me/5582996525876',
  };

  return (
    <Box sx={{ backgroundColor: '#F5F5F5', height: '10%', padding: '16px', textAlign: 'center' }}>
    <Typography variant='h5' id="Contatos" sx={{color: 'black', fontFamily: 'monospace'}}>Vamos Trabalhar Juntos!</Typography>

    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '12px' }}>
      <Link href={socialLinks.linkedin} target="_blank" rel="noopener" style={{ marginRight: '12px' }}>
        <LinkedInIcon color="primary" fontSize="large" />
      </Link>
      <Link href={socialLinks.github} target="_blank" rel="noopener" style={{ marginRight: '12px' }}>
        <GitHubIcon color="primary" fontSize="large" />
      </Link>
      <Link href={socialLinks.email} target="_blank" rel="noopener" style={{ marginRight: '12px' }}>
        <EmailIcon color="primary" fontSize="large" />
      </Link>
      <Link href={socialLinks.whatsapp} target="_blank" rel="noopener" style={{ marginRight: '12px' }}>
        <WhatsAppIcon color="primary" fontSize="large" />
      </Link>
    </Box>
  </Box>
  );
};

export default Contact;