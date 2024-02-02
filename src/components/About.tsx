import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import imgPerfil from '../../public/iprofile.png';
import Image from 'next/image';
import evento from '../../public/evento.jpeg';
import evento2 from '../../public/evento2.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const About: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Box sx={{ backgroundColor: '#F5F5F5' }}>
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path className="wave1" fill="#B8CACC" fillOpacity="1" d="M0,192L21.8,197.3C43.6,203,87,213,131,213.3C174.5,213,218,203,262,176C305.5,149,349,107,393,85.3C436.4,64,480,64,524,101.3C567.3,139,611,213,655,213.3C698.2,213,742,139,785,133.3C829.1,128,873,192,916,186.7C960,181,1004,107,1047,85.3C1090.9,64,1135,96,1178,138.7C1221.8,181,1265,235,1309,218.7C1352.7,203,1396,117,1418,74.7L1440,32L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
        <path className="wave2" fill="#B8CACC" fillOpacity="0.7" d="M0,0L21.8,21.3C43.6,43,87,85,131,96C174.5,107,218,85,262,96C305.5,107,349,149,393,138.7C436.4,128,480,64,524,74.7C567.3,85,611,171,655,202.7C698.2,235,742,213,785,181.3C829.1,149,873,107,916,106.7C960,107,1004,149,1047,149.3C1090.9,149,1135,107,1178,112C1221.8,117,1265,171,1309,176C1352.7,181,1396,139,1418,117.3L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
        <path className="wave3" fill="#B8CACC" fillOpacity="0.5" d="M0,32L24,32C48,32,96,32,144,64C192,96,240,160,288,202.7C336,245,384,267,432,272C480,277,528,267,576,240C624,213,672,171,720,160C768,149,816,171,864,176C912,181,960,171,1008,192C1056,213,1104,267,1152,277.3C1200,288,1248,256,1296,208C1344,160,1392,96,1416,64L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
      </svg>
      <Box sx={{ height: '100%' }}>
        <Box sx={{ marginTop: '2rem' }} id="SobreMim">
          <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '2rem', fontFamily: 'monospace' }}>Sobre Mim</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%', flexGrow: 1, width: { xs: '90vw', md: '60vw' } }}>
              <Typography variant='h6' sx={{ textAlign: 'justify', marginBottom: '1rem', marginLeft: { xs: '2rem', md: '2rem' }, maxWidth: '100%', fontFamily: 'monospace' }}>
                Em 2022, tomei a ousada decisão de fazer uma transição de carreira para área tech e ao longo de 2023, mergulhei de cabeça, trabalhando como freelancer e aprimorando minhas habilidades a cada projeto.
                Sou determinada e apaixonada por evoluir constantemente na minha carreira.
                Fora do ambiente profissional, sou casada e tenho uma cachorrinha (Maju) que é minha fiel companheira. Mantenho-me organizada e sempre busco atualizações nas tecnologias para entregar os melhores resultados.
                Nos momentos de lazer, expresso minha criatividade através do desenho e pintura. Também sou fã de jogos como Overwatch, Valorant e League of Legends.
                Estou ansiosa para continuar aprimorando minhas habilidades e contribuir para projetos significativos.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginLeft: { xs: '2rem', md: '10rem' }, marginTop: { xs: '1rem', md: '-4rem' } }}>
              <Image src={imgPerfil} alt='eu' style={{ width: '100%', height: 'auto', maxWidth: '23rem' }} />
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center'}}>
            <Typography variant='h5' sx={{ fontFamily: 'monospace' }}>Vamos construir algo incrível juntos!</Typography>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: '2rem', paddingLeft: '2rem' }}>
          <Carousel responsive={responsive} infinite>
            <Box><Image src={evento} alt="img1" style={{ width: '20rem', height: '20rem', borderRadius: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} /></Box>
            <Box><Image src={evento2} alt="img2" style={{ width: '20rem', height: '20rem', borderRadius: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} /></Box>
            <Box><Image src={evento} alt="img1" style={{ width: '20rem', height: '20rem', borderRadius: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} /></Box>
            <Box><Image src={evento2} alt="img2" style={{ width: '20rem', height: '20rem', borderRadius: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} /></Box>
          </Carousel>
        </Box>
      </Box>
    </Box>
  )
};
export default About;
