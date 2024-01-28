import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import floral from '../../public/floral-card.jpeg';
import About from '@/components/About';
import Formation from '@/components/Formation';

const Profile: React.FC = () => {

  const backgroundStyle = {
    backgroundImage: `url(${floral.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '85vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={backgroundStyle}>
        <Typography variant='h4' sx={{ marginTop: '7rem' }}>
          Olá,
          <br />
          Meu nome é Georgia Rocha e eu sou <span>DESENVOLVEDORA FULLSTACK!</span>
        </Typography>
      </Box>
      <About />
      <Formation />
    </Box>
  );
};
export default Profile;