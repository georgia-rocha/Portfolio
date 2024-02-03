import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import woman from '../../public/womanDevelopmen.svg';
import Image from 'next/image';
import Tecnologies from './Tecnologies';
import Projects from './Projects';
import Experience from './Experience';

const Formation: React.FC = () => {

  return (
    <Box sx={{ backgroundColor: '#4682B4', position: 'relative', overflow: 'hidden' }}>
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path className="wave1" fill="#F5F5F5" fillOpacity="1" d="M0,192L21.8,197.3C43.6,203,87,213,131,213.3C174.5,213,218,203,262,176C305.5,149,349,107,393,85.3C436.4,64,480,64,524,101.3C567.3,139,611,213,655,213.3C698.2,213,742,139,785,133.3C829.1,128,873,192,916,186.7C960,181,1004,107,1047,85.3C1090.9,64,1135,96,1178,138.7C1221.8,181,1265,235,1309,218.7C1352.7,203,1396,117,1418,74.7L1440,32L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
        <path className="wave2" fill="#F5F5F5" fillOpacity="0.7" d="M0,0L21.8,21.3C43.6,43,87,85,131,96C174.5,107,218,85,262,96C305.5,107,349,149,393,138.7C436.4,128,480,64,524,74.7C567.3,85,611,171,655,202.7C698.2,235,742,213,785,181.3C829.1,149,873,107,916,106.7C960,107,1004,149,1047,149.3C1090.9,149,1135,107,1178,112C1221.8,117,1265,171,1309,176C1352.7,181,1396,139,1418,117.3L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
        <path className="wave3" fill="#F5F5F5" fillOpacity="0.5" d="M0,32L24,32C48,32,96,32,144,64C192,96,240,160,288,202.7C336,245,384,267,432,272C480,277,528,267,576,240C624,213,672,171,720,160C768,149,816,171,864,176C912,181,960,171,1008,192C1056,213,1104,267,1152,277.3C1200,288,1248,256,1296,208C1344,160,1392,96,1416,64L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
      </svg>
      <Box sx={{ height: '100%', color: 'white' }}>
        <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '2rem', fontFamily: 'monospace',  }} id="Formation">FORMAÇÃO</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ marginTop: {xs: '-2rem', md: '1rem' }}}>
            <Image src={woman} alt="woman-development" style={{ width: '100%', height: 'auto', objectFit: 'cover'}} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'justify', listStyleType: 'none', paddingX: '2rem' }}>
              <Typography variant='h6' sx={{fontFamily: 'monospace', background: 'rgba(255, 255, 255, 0.5)', color: 'black', padding: '1rem', borderRadius: '0.5rem'}}>CIÊNCIA DA COMPUTAÇÃO - Estácio (Andamento - Previsão 2026)</Typography>
              <Typography variant='subtitle2' sx={{fontFamily: 'monospace'}}>
                - Proporciona uma compreensão aprofundada e abrangente dos fundamentos teóricos e práticos da computação;
              </Typography>

              <hr style={{ color: 'white', marginTop: '1rem', marginBottom: '1rem' }} />

              <Typography variant='h6' sx={{fontFamily: 'monospace', background: 'rgba(255, 255, 255, 0.5)', color: 'black', padding: '1rem', borderRadius: '0.5rem'}}>DESENVOLVIMENTO WEB - Trybe (2023)</Typography>
              <Typography variant='subtitle2' sx={{fontFamily: 'monospace'}}>
                - Explorei áreas especializadas, como inteligência artificial, banco de dados, segurança da informação e desenvolvimento web Front e Back end.
                <br />
                - Colaborei em equipes, aprimorando minhas habilidades de comunicação e metodologias ágeis.
              </Typography>

              <hr style={{ color: 'white', marginTop: '1rem', marginBottom: '1rem' }} />

              <Typography variant='h6' sx={{fontFamily: 'monospace', background: 'rgba(255, 255, 255, 0.5)', color: 'black', padding: '1rem', borderRadius: '0.5rem'}} >NUTRIÇÃO - Centro Universitário Tiradentes (2022)</Typography>
              <Typography variant='subtitle2' sx={{fontFamily: 'monospace'}}>
                - Adquiri uma base sólida através dos estágios supervisionados, participando ativamente em ambientes clínicos, comunitários e institucionais.
                <br />
                - Participei de projetos de pesquisa e atividades extracurriculares que aprofundaram meu entendimento sobre as complexidades da saúde em diferentes grupos populacionais.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Experience />
        <Projects />
        <Tecnologies />
      </Box>
    </Box>
  );
};

export default Formation;
