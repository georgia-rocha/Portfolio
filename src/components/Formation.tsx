import * as React from 'react';
import { Box, Typography } from '@mui/material';
import reactImg from '../../public/React-20232A.svg';
import reactRouter from '../../public/React_Router-CA4245.svg';
import redux from '../../public/Redux-593D88.svg';
import jest from '../../public/Jest-96737d.svg';
import css from '../../public/CSS3-1572B6.svg';
import html from '../../public/HTML5-E34F26.svg';
import git from '../../public/Git-E34F26.svg';
import javascript from '../../public/JavaScript-F7DF1E.svg';
import typeScript from '../../public/TypeScript-007ACC.svg';
import sass from '../../public/Sass-CC6699.svg';
import tl from '../../public/Testing_Library-de302f.svg';
import vue from '../../public/vue.svg';
import bulma from '../../public/Bulma.svg';
import angular from '../../public/angular.svg';
import bootstrap from '../../public/bootstrap.svg';
import contextAPI from '../../public/contextApi.svg';
import expo from '../../public/expo.svg';
import mui from '../../public/mui.svg';
import next from '../../public/next.svg';
import reactNative from '../../public/reactNative.svg';
import vite from '../../public/vite.svg';
import woman from '../../public/womanDevelopment.svg';
import Image from 'next/image';

const Formation: React.FC = () => {

  return (
    <Box sx={{ backgroundColor: '#4682B4', position: 'relative', overflow: 'hidden' }}>
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path className="wave1" fill="#F5F5F5" fill-opacity="1" d="M0,192L21.8,197.3C43.6,203,87,213,131,213.3C174.5,213,218,203,262,176C305.5,149,349,107,393,85.3C436.4,64,480,64,524,101.3C567.3,139,611,213,655,213.3C698.2,213,742,139,785,133.3C829.1,128,873,192,916,186.7C960,181,1004,107,1047,85.3C1090.9,64,1135,96,1178,138.7C1221.8,181,1265,235,1309,218.7C1352.7,203,1396,117,1418,74.7L1440,32L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
        <path className="wave2" fill="#F5F5F5" fill-opacity="0.7" d="M0,0L21.8,21.3C43.6,43,87,85,131,96C174.5,107,218,85,262,96C305.5,107,349,149,393,138.7C436.4,128,480,64,524,74.7C567.3,85,611,171,655,202.7C698.2,235,742,213,785,181.3C829.1,149,873,107,916,106.7C960,107,1004,149,1047,149.3C1090.9,149,1135,107,1178,112C1221.8,117,1265,171,1309,176C1352.7,181,1396,139,1418,117.3L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
        <path className="wave3" fill="#F5F5F5" fill-opacity="0.5" d="M0,32L24,32C48,32,96,32,144,64C192,96,240,160,288,202.7C336,245,384,267,432,272C480,277,528,267,576,240C624,213,672,171,720,160C768,149,816,171,864,176C912,181,960,171,1008,192C1056,213,1104,267,1152,277.3C1200,288,1248,256,1296,208C1344,160,1392,96,1416,64L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
      </svg>
      <Box sx={{ height: '150vh', marginTop: '-3rem', color: 'white' }}>
        <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '2rem' }}>FORMAÇÃO</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Image src={woman} alt="woman-development" style={{ width: '45vw', height: '80vh', objectFit: 'cover', marginLeft: '-5rem', marginTop: '-2rem' }} />
          <ul style={{ width: '45vw', textAlign: 'justify', marginRight: '5rem', listStyleType: 'none', padding: 0 }}>
            <li>CIÊNCIA DA COMPUTAÇÃO - Estácio(Andamento - Previsão 2026);
              <br />
              <br />
              -  Proporciona uma compreensão aprofundada e abrangente dos fundamentos teóricos e práticos da computação;
            </li>
            <br />
            <hr style={{ color: 'white' }} />
            <br />
            <li>DESENVOLVIMENTO WEB - Trybe(2023);
              <br />
              <br />
              -  Explorei áreas especializadas, como inteligência artificial, banco de dados, segurança da informação e desenvolvimento web Front e Back end.
              <br />
              -  Colaborei em equipes, aprimorando minhas habilidades de comunicação e metodologias ágeis.
            </li>
            <br />
            <hr style={{ color: 'white' }} />
            <br />
            <li>NUTRIÇÃO - Centro Universitário Tiradentes(2022);
              <br />
              <br />
              - Adquiri uma base sólida através dos estágios supervisionados, participando ativamente em ambientes clínicos, comunitários e institucionais.
              <br />
              - Participei de projetos de pesquisa e atividades extracurriculares que aprofundaram meu entendimento sobre as complexidades da saúde em diferentes grupos populacionais.
            </li>
          </ul>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.4)', padding: '1rem' }}>
          <Typography variant="h4">Tecnologias</Typography>
          <Typography variant="h6">Front-End</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Image src={javascript} alt="Javascript" width={120} height={30} />
            <Image src={typeScript} alt="Typescript" width={120} height={30} />
            <Image src={reactImg} alt="React" width={100} height={30} />
            <Image src={reactRouter} alt="React-Router" width={120} height={30} />
            <Image src={redux} alt="Redux" width={100} height={30} />
            <Image src={html} alt="HTML5" width={100} height={30} />
            <Image src={css} alt="CSS3" width={100} height={30} />
            <Image src={sass} alt="Sass" width={80} height={30} />
            <Image src={git} alt="Git" width={80} height={30} />
            <Image src={jest} alt="Jest" width={80} height={30} />
            <Image src={tl} alt="Testing-Library" width={140} height={30} />
            <Image src={vue} alt="Vue" width={90} height={30} />
            <Image src={bulma} alt="Bulma" width={90} height={30} />
            <Image src={angular} alt="Angular" width={130} height={30} />
            <Image src={bootstrap} alt="Bootstrap" width={130} height={30} />
            <Image src={contextAPI} alt="Context-API" width={130} height={30} />
            <Image src={expo} alt="Expo" width={80} height={30} />
            <Image src={mui} alt="MUI" width={80} height={30} />
            <Image src={next} alt="Next" width={80} height={30} />
            <Image src={reactNative} alt="React-Native" width={130} height={30} />
            <Image src={vite} alt="Vite" width={80} height={30} />
          </Box>
          <Typography variant="h6">Back-End</Typography>
          <Typography variant="h6">Banco de Dados</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Formation;
