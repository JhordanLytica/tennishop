import HeaderStyle from './style';
import logo from '../image/Logo.svg';
import iconMenu from '../image/Grupo4.svg';
import IconButton from '@mui/material/IconButton';

const Header = () => 
  <HeaderStyle>
    <img src={logo} height="80px" width="120px" alt="logo" />
    <IconButton>
      <img src={iconMenu} height="28px" width="47px" alt="logo" />
    </IconButton>
  </HeaderStyle>
;

export { Header };