import * as React from 'react';
import { Box, Typography } from '@mui/material';
import reactImg from '../../public/React-20232A.svg';
import redux from '../../public/Redux-593D88.svg';
import jest from '../../public/Jest-96737d.svg';
import css from '../../public/CSS3-1572B6.svg';
import html from '../../public/HTML5-E34F26.svg';
import git from '../../public/Git-E34F26.svg';
import javascript from '../../public/JavaScript-F7DF1E.svg';
import typeScript from '../../public/TypeScript-007ACC.svg';
import sass from '../../public/Sass-CC6699.svg';
import vue from '../../public/vue.svg';
import bulma from '../../public/Bulma.svg';
import angular from '../../public/angular.svg';
import bootstrap from '../../public/bootstrap.svg';
import expo from '../../public/expo.svg';
import mui from '../../public/mui.svg';
import next from '../../public/next.svg';
import reactNative from '../../public/reactNative.svg';
import docker from '../../public/Docker.svg';
import jquery from '../../public/jQuery.svg';
import markdown from '../../public/Markdown.svg';
import sequelize from '../../public/Sequelize.svg';
import insomnia from '../../public/Insomnia.svg';
import prisma from '../../public/prisma.svg';
import postgres from '../../public/postgres.svg';
import mysql from '../../public/mysql.svg';
import express from '../../public/Express.svg';
import axios from '../../public/axios.svg';
import php from '../../public/PHP.svg';
import springBoot from '../../public/Spring_Boot.svg';
import python from '../../public/Python.svg';
import jira from '../../public/jira.svg';
import notion from '../../public/Notion.svg';
import trello from '../../public/Trello.svg';
import java from '../../public/Java.svg';
import slack from '../../public/slack.svg';
import eslint from '../../public/eslint.svg';
import githubPages from '../../public/GitHubPages.svg';
import Jest from '../../public/Jest.svg';
import LinuxMint from '../../public/Linux_Mint.svg';
import mocha from '../../public/Mocha.svg';
import vercel from '../../public/vercel.svg';
import Image from 'next/image';

const Tecnologies: React.FC = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        minHeight: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backgroundImage: `url(${reactImg}), url(${typeScript}), url(${javascript}), ...`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        '@media (max-width: 600px)': {
          backgroundSize: 'contain',
        },
      }}
    >
    <Typography variant="h4" sx={{marginTop: '2rem'}} id="Tecnologias">Tecnologias</Typography>
   
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem',marginTop: '2rem' }}>
      <Image src={typeScript} alt="Typescript" width={120} height={30} />
      <Image src={javascript} alt="Javascript" width={120} height={30} />
      <Image src={reactImg} alt="React" width={100} height={30} />
      <Image src={redux} alt="Redux" width={100} height={30} />
      <Image src={next} alt="Next" width={80} height={30} />
      <Image src={vue} alt="Vue" width={90} height={30} />
      <Image src={angular} alt="Angular" width={130} height={30} />
      <Image src={css} alt="CSS3" width={100} height={30} />
      <Image src={sass} alt="Sass" width={80} height={30} />
      <Image src={bootstrap} alt="Bootstrap" width={130} height={30} />
      <Image src={mui} alt="MUI" width={80} height={30} />
      <Image src={git} alt="Git" width={80} height={30} />
      <Image src={jest} alt="Jest" width={80} height={30} />
      <Image src={java} alt="Java" width={80} height={30} />
      <Image src={python} alt="Python" width={90} height={30} />
      <Image src={php} alt="PHP" width={80} height={30} />
      <Image src={reactNative} alt="React-Native" width={130} height={30} />
      <Image src={docker} alt="docker" width={80} height={30} />
      <Image src={mysql} alt="MySQL" width={90} height={30} />
      <Image src={jquery} alt="Jquery" width={80} height={30} />
    </Box>
 
   {/*  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
      
      <Image src={express} alt="express" width={110} height={30} />
      <Image src={html} alt="HTML5" width={100} height={30} />
      <Image src={bulma} alt="Bulma" width={90} height={30} />
      <Image src={axios} alt="axios" width={80} height={30} />
      <Image src={springBoot} alt="Spring-boot" width={110} height={30} />
    </Box>
   
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
      <Image src={postgres} alt="Postgres" width={100} height={30} />
      <Image src={sequelize} alt="Sequelize" width={100} height={30} />
      <Image src={prisma} alt="prisma" width={80} height={30} />
    </Box>
  
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
      <Image src={eslint} alt="eslint" width={90} height={30} />
      <Image src={mocha} alt="mocha" width={80} height={30} />
      <Image src={Jest} alt="Jest" width={80} height={30} />
      <Image src={vercel} alt="Vercel" width={80} height={30} />
      <Image src={githubPages} alt="Git-Pages" width={130} height={30} />
    </Box>
   
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
      <Image src={LinuxMint} alt="Mint" width={110} height={30} />
      <Image src={insomnia} alt="Insomnia" width={100} height={30} />
      <Image src={markdown} alt="Markdown" width={110} height={30} />
      <Image src={notion} alt="Notion" width={80} height={30} />
      <Image src={trello} alt="Trello" width={80} height={30} />
      <Image src={slack} alt="Slack" width={80} height={30} />
      <Image src={jira} alt="Jira" width={80} height={30} />
      <Image src={expo} alt="Expo" width={80} height={30} />
    </Box> */}
    <svg className="waves" style={{width: '100vw', marginBottom: '-0.5rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#F5F5F5"  className="wave1" fillOpacity="1" d="M0,96L18.5,133.3C36.9,171,74,245,111,266.7C147.7,288,185,256,222,240C258.5,224,295,224,332,234.7C369.2,245,406,267,443,234.7C480,203,517,117,554,112C590.8,107,628,181,665,192C701.5,203,738,149,775,138.7C812.3,128,849,160,886,192C923.1,224,960,256,997,240C1033.8,224,1071,160,1108,160C1144.6,160,1182,224,1218,261.3C1255.4,299,1292,309,1329,293.3C1366.2,277,1403,235,1422,213.3L1440,192L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
        <path fill="#F5F5F5" fillOpacity="0.5" d="M0,224L17.1,224C34.3,224,69,224,103,202.7C137.1,181,171,139,206,138.7C240,139,274,181,309,186.7C342.9,192,377,160,411,138.7C445.7,117,480,107,514,117.3C548.6,128,583,160,617,149.3C651.4,139,686,85,720,80C754.3,75,789,117,823,160C857.1,203,891,245,926,256C960,267,994,245,1029,240C1062.9,235,1097,245,1131,213.3C1165.7,181,1200,107,1234,106.7C1268.6,107,1303,181,1337,218.7C1371.4,256,1406,256,1423,256L1440,256L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path>
        <path fill="#F5F5F5" className="wave3" fillOpacity="0.5" d="M0,288L18.5,282.7C36.9,277,74,267,111,250.7C147.7,235,185,213,222,213.3C258.5,213,295,235,332,218.7C369.2,203,406,149,443,133.3C480,117,517,139,554,170.7C590.8,203,628,245,665,245.3C701.5,245,738,203,775,186.7C812.3,171,849,181,886,192C923.1,203,960,213,997,213.3C1033.8,213,1071,203,1108,186.7C1144.6,171,1182,149,1218,165.3C1255.4,181,1292,235,1329,256C1366.2,277,1403,267,1422,261.3L1440,256L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
      </svg>
  </Box>
  );
};

export default Tecnologies;
