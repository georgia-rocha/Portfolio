import * as React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import WomanIcon from '@mui/icons-material/Woman';
import WorkIcon from '@mui/icons-material/Work';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import BadgeIcon from '@mui/icons-material/Badge';

interface MenuProps {
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ onClose })  => {
  return (
    <Drawer
      anchor="right"
      open={true}
      onClose={onClose}
      variant="temporary"
    >
      <List>
        <a href="#SobreMim">
        <ListItem button onClick={onClose}>
            <ListItemIcon>
              <WomanIcon />
            </ListItemIcon>
            <ListItemText primary="Sobre Mim" />
          </ListItem>
        </a>
        <a href="#Formation">
        <ListItem button onClick={onClose}>
          <ListItemIcon>
            <BadgeIcon />
          </ListItemIcon>
          <ListItemText primary="Formação" />
        </ListItem>
        </a>
        <a href="#Experience">
          <ListItem button onClick={onClose}>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Experiência" />
          </ListItem>
        </a>
        <a href="#Projetos">
        <ListItem button onClick={onClose}>
          <ListItemIcon>
            <LaptopChromebookIcon />
          </ListItemIcon>
          <ListItemText primary="Projetos" />
        </ListItem>
        </a>
        <a href="#Tecnologias">
        <ListItem button onClick={onClose}>
          <ListItemIcon>
            <VolunteerActivismIcon />
          </ListItemIcon>
          <ListItemText primary="Tecnologias" />
        </ListItem>
        </a>
        <a href="#Contatos">
        <ListItem button onClick={onClose}>
          <ListItemIcon>
            <ContactPhoneIcon />
          </ListItemIcon>
          <ListItemText primary="Contatos" />
        </ListItem>
        </a>
      </List>
    </Drawer>
  );
};
export default Menu;