import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import tunes from '../../public/albumTunes.png';
import shoppingCart from '../../public/shopingCart.png';
import trybeWallet from '../../public/trybeWallet.png';
import tfc from '../../public/tfc.png';
import farm from '../../public/farm.png';
import blog from '../../public/blog.jpeg';
import uirapuru from '../../public/freelancerUirapuru.jpeg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const projects = [
  {
    name: 'Uirapuru',
    image: uirapuru,
    link: 'https://www.linkedin.com/posts/luizfilipelgs_devs-fullstack-mmdg-activity-7141075646071451650-1izQ?utm_source=share&utm_medium=member_desktop',
    description: 'Envolvida na implementação e aprimoramento de funcionalidades em um Software de Gestão de Usinas Solares Fotovoltaicas. Além disso, tenho contribuído para o gerenciamento e organização das atividades, bem como para o design e aperfeiçoamento da interface',
  },
  {
    name: 'Tunes of Life',
    image: tunes,
    link: 'https://github.com/georgia-rocha/tunes-of-life',
    description: 'Tunes of Life é uma aplicação web construída utilizando Next.js, React e Redux para gerenciar e explorar uma API de músicas.'
  },
  {
    name: 'Agrix',
    image: farm,
    link: 'https://github.com/georgia-rocha/project-agrix-java',
    description: 'Projeto para uma hipotetica empresa especializada em tecnologias para melhorar a eficiência no cultivo de plantações. Visando reduzir o desperdício de recursos, fazendo um uso mais responsável da terra disponível para plantio. '
  },
  {
    name: 'Shopping Cart',
    image: shoppingCart,
    link: 'https://github.com/georgia-rocha/shopping-cart',
    description: 'Foi criado um front de um site de compras onde o carrinho de compras é dinâmico, os dados são consumidos diretamente de uma API e o teste de cobertura foram feitos de acordo com as funções da aplicação; '
  },
  {
    name: 'Trybe Wallet',
    image: trybeWallet,
    link: 'https://github.com/georgia-rocha/trybe-wallet',
    description: 'É uma aplicação de uma carteira de controle de gastos com conversor de moedas, sua estilização e seus testes. '
  },
  {
    name: 'TFC-Brazilian-Soccer-Rankings',
    image: tfc,
    link: 'https://github.com/georgia-rocha/TFC-Brazilian-Soccer-Rankings',
    description: 'Site informativo sobre partidas e classificações de futebol, Back-end dockerizado consumido por um front-end já desenvolvido, com modelagem de dados através do Sequelize.'
  },
  {
    name: 'Blogs API',
    image: blog,
    link: 'https://github.com/georgia-rocha/Blogs-API',
    description: 'É uma API e um banco de dados em Node.js, utilizando sequelize para fazer um CRUD, onde é possível criar usuários, fazer login, criar categorias de posts, criar posts, atualizá-los, deletá-los, buscá-los por id e por texto em seu título ou em seu conteúdo. '
  }
];

const Projects: React.FC = () => {
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
    <Box sx={{ marginBottom: '4rem', marginTop: '4rem' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem', fontFamily: 'monospace' }} id="Projetos">
        Projetos
      </Typography>
      <Box sx={{ paddingLeft: '2rem' }}>
        <Carousel responsive={responsive} infinite>
          {projects?.map((project, index) => (
            <Link key={index} href={project?.link || ''} passHref>
              <Typography
                component="a"
                style={{
                  flex: '0 0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: '1rem',
                  width: '25rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                  padding: '1rem',
                  textDecoration: 'none',
                  margin: '0',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  fontFamily: 'monospace',
                  height: '25rem',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontFamily: 'monospace', textAlign: 'center' }}>
                  {project?.name}
                </Typography>
                <Image
                  src={project?.image || ''}
                  alt={project?.name || ''}
                  style={{
                    width: '100%',
                    height: '10rem',
                    objectFit: 'cover',
                    borderRadius: '.5rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Typography variant="caption" sx={{ marginTop: '0.5rem', textAlign: 'justify', fontFamily: 'monospace' }}>
                  {project?.description}
                </Typography>
              </Typography>
            </Link>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Projects;
