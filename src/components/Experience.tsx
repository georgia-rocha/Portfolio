import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import evento from '../../public/evento.jpeg';
import evento2 from '../../public/evento2.jpg';
import Image from 'next/image';

const Experience: React.FC = () => {
  return (
    <Box>
      <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem', fontFamily: 'monospace' }} id="Experience">Experiência</Typography>
      <Grid container spacing={2} sx={{paddingX: '2rem', textAlign: 'justify'}}>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginBottom: '2rem', width: '100%' }}>
            <Typography variant='h6' sx={{ fontFamily: 'monospace', background: 'rgba(255, 255, 255, 0.5)', color: 'black', padding: '1rem', borderRadius: '0.5rem' }}>
              Desenvolvedora Full Stack - Uirapuru Tech Amazon (Julho 2023 - Até o momento)
            </Typography>
            <Typography variant='subtitle2' sx={{ marginTop: '1rem', fontFamily: 'monospace' }}>
              Estou envolvida na implementação e aprimoramento de funcionalidades em um Software de Gestão de Usinas Solares Fotovoltaicas. Além disso, tenho contribuído para o gerenciamento e organização das atividades, bem como para o design e aperfeiçoamento da interface.
              <br />
              * TypeScript, React, Prisma, PostgreSQL, JavaScript, AWS Lambda, Styled-Components, Node, Amazon SQS, Amazon SNS, Git e GitHub, Scrum, Jira, Metodologias ágeis, entre outras.
            </Typography>
          </Box>
          <Box sx={{ marginBottom: '2rem', width: '100%' }}>
            <Typography variant='h6' sx={{ fontFamily: 'monospace', background: 'rgba(255, 255, 255, 0.5)', color: 'black', padding: '1rem', borderRadius: '0.5rem' }}>
              Desenvolvedora Full Stack Voluntária - Genius IA (Dezembro 2023 - Até o momento)
            </Typography>
            <Typography variant='subtitle2' sx={{ marginTop: '1rem', fontFamily: 'monospace' }}>
              Estou envolvida na criação de uma aplicação de leitura de exames usando tecnologia de Inteligência Artificial.
              <br />
              * React Native, Firebase, TypeScript, Node, CSS e outros.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{marginTop:{sx: '1rem', md: '3.2rem'}, display: 'flex', justifyContent: 'center'}}>
          <Image src={evento} alt="woman-development" style={{ width: '90%', height: 'auto', objectFit: 'cover', borderRadius: '1rem', maxHeight: '30rem' }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{marginTop:{sx: '1rem', md: '3.2rem'}, display: 'flex', justifyContent: 'center'}}>
          <Image src={evento2} alt="woman-development" style={{ width: '90%', height: 'auto', objectFit: 'cover', borderRadius: '1rem', maxHeight: '30rem' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginBottom: '2rem', width: '100%' }}>
            <Typography variant='h6' sx={{ fontFamily: 'monospace', background: 'rgba(255, 255, 255, 0.5)', color: 'black', padding: '1rem', borderRadius: '0.5rem' }}>
              Transição de Carreira - Trybe (Agosto 2022 - Novembro 2023)
            </Typography>
            <Typography variant='subtitle2' sx={{ marginTop: '1rem', fontFamily: 'monospace' }}>
              Aprofundei meu entendimento em linguagens de programação, ferramentas e metodologias relevantes, proporcionando uma base sólida para minha nova trajetória profissional.
              <br />
              * React, TypeScript, Java, Python.
            </Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant='h6' sx={{ fontFamily: 'monospace', background: 'rgba(255, 255, 255, 0.5)', color: 'black', padding: '1rem', borderRadius: '0.5rem' }}>
              Estagiária Extra Curricular - Secretária de Estado de Ressocialização e Inclusão Social-SERIS (março 2020-setembro 2020)
            </Typography>
            <Typography variant='subtitle2' sx={{ marginTop: '1rem', fontFamily: 'monospace' }}>
              Durante meu estágio, auxiliei na organização da equipe, monitoramento do ambiente, manutenção de instalações e equipamentos, coordenei a distribuição de alimentos, identifiquei riscos ambientais, registrei dados dos servidores e elaborei treinamentos, assumindo outras responsabilidades conforme necessário.
              <br />
              * Metodologias Ágeis, Comunicação, Criatividade, Trabalho em equipe.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;