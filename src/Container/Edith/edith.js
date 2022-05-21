import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchCategories,
  fetchMarck,
  fetchStock,
  fetchEdithProduct
} from '../Add/fetch';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { validate} from '../Add/validation';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AddImage } from '../Add/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#000',
      contrastText: '#fff',
    },
  },
});

const EdithContainer = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState({
    img: null,
  });

  useEffect(()=> {
    dispatch(fetchCategories());
    dispatch(fetchMarck());
    dispatch(fetchStock());
  }, [dispatch]);

  const categories = useSelector((state) => state.options.categories);
  const marck = useSelector((state) => state.options.marck);
  const stock = useSelector((state) => state.options.stock);
  const getEditProduct = useSelector((state) => state.options.edithProduct);

  const initialValues = {
    img: null,
    description: getEditProduct.description,
    category: getEditProduct.category,
    price: getEditProduct.price,
    stock: getEditProduct.stock,
    colour: getEditProduct.colour,
    Mark: getEditProduct.Mark,
    composition: getEditProduct.composition,
    target: getEditProduct.target,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validate),
    onSubmit: values => {
      const test = Object.assign(values, image);
      console.log(test);
      dispatch(fetchEdithProduct(values, getEditProduct.id));
    },
  });

  const uploadImage = (archivos) => {
    Array.from(archivos).forEach(archivo => {
      let reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = function(){
        let arrayAuxiliar=[];
        let base64 = reader.result;
        arrayAuxiliar=base64.split(',');
        setImage({...image, img: arrayAuxiliar});
      }
    })
  };

  return (
    <form onSubmit={formik.handleSubmit} style={{minHeight: '100%'}}>
      <Grid container spacing={5} >
        <Grid item xs={4} alignItems="stretch">
          {image.img !== null ?
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <AddImage src={image.img} height="386px" alt="image" />
          : null}
          <input type="file" onChange={(e) => {
            uploadImage(e.target.files)
          }} />
          <h2>DESCRIPCIÓN</h2>
          <TextField
            label="Escribe algo que describa este producto"
            multiline
            rows={5}
            fullWidth
            name='description'
            id='description'
            onChange={formik.handleChange}
            value={formik.values.description}
            variant="standard"
          />
          {formik.touched.description && formik.errors.description ? (
            <p className="error">{formik.errors.description}</p>
          ) : null}
        </Grid>
        <Grid item xs={8} alignItems="stretch">
          <Grid
            container
            spacing={1}
          >
            <Grid item xs={12}>
              <h2>GENERAL</h2>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    select
                    label="Categoria"
                    name='category'
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    variant="filled"
                    fullWidth
                  >
                    {categories.map((option) => (
                      <MenuItem key={uuidv4()} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  {formik.touched.category && formik.errors.category ? (
                    <p className="error">{formik.errors.category}</p>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name='price'
                    label="Precio"
                    variant="filled"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    fullWidth
                  />
                  {formik.touched.price && formik.errors.price ? (
                    <p className="error">{formik.errors.price}</p>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    select
                    label="Stock"
                    name='stock'
                    value={formik.values.stock}
                    onChange={formik.handleChange}
                    variant="filled"
                    fullWidth
                  >
                    {stock.map((option) => (
                      <MenuItem key={uuidv4()} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  {formik.touched.stock && formik.errors.stock ? (
                    <p className="error">{formik.errors.stock}</p>
                  ) : null}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <h2>ACERCA DEL PRODUCTO</h2>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    name='colour'
                    label="Color"
                    variant="filled"
                    value={formik.values.colour}
                    onChange={formik.handleChange}
                    fullWidth
                  />
                  {formik.touched.colour && formik.errors.colour ? (
                    <p className="error">{formik.errors.colour}</p>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name='composition'
                    label="Composición"
                    variant="filled"
                    value={formik.values.composition}
                    onChange={formik.handleChange}
                    fullWidth
                  />
                  {formik.touched.composition && formik.errors.composition ? (
                    <p className="error">{formik.errors.composition}</p>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    select
                    label="Marca"
                    name='Mark'
                    value={formik.values.Mark}
                    onChange={formik.handleChange}
                    variant="filled"
                    fullWidth
                  >
                    {marck.map((option) => (
                      <MenuItem key={uuidv4()} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  {formik.touched.Mark && formik.errors.Mark ? (
                    <p className="error">{formik.errors.Mark}</p>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name='target'
                    label="Target"
                    variant="filled"
                    value={formik.values.target}
                    onChange={formik.handleChange}
                    fullWidth
                  />
                  {formik.touched.target && formik.errors.target ? (
                    <p className="error">{formik.errors.target}</p>
                  ) : null}
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end" style={{marginTop: '10px'}}>
              <ThemeProvider theme={theme}>
                <Button type='submit' variant="outlined" color="neutral">
                  GUARDAR CAMBIOS
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export { EdithContainer };