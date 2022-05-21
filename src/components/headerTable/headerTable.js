import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import HeaderTableStyle from "./styles";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Iconadd from '../image/Grupo3.svg';
import Iconsearch from '../image/feather-search.svg';
import { searchProducts, fetchAllProducts } from "../../Container/Table/fetch";

const HeaderTable = () => {
  const [value, setValue] = useState('');
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/add/product");
  }

  const search = (e) => {
    setValue(e.target.value);
    if (e.target.value !== '') {
      dispatch(searchProducts(e.target.value));
    } else {
      dispatch(fetchAllProducts());
    }
  }

  return (
    <HeaderTableStyle>
      <h1>Mis productos</h1>
      <div>
        <FormControl>
          <InputLabel htmlFor="standard-adornment-password">
            Has una búsqueda
          </InputLabel>
          <Input
            type='text'
            value={value}
            onChange={search}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  /* onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword} */
                >
                  <img height="19px" src={Iconsearch} alt="search" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <IconButton onClick={handleClick}>
          <img className="add" src={Iconadd} alt="add" />
        </IconButton>
      </div>
    </HeaderTableStyle>
  );
}

export { HeaderTable };
