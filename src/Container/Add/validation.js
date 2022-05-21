import * as Yup from 'yup';

export const initialValues = {
  img: null,
  description: '',
  category: '',
  price: '',
  stock: '',
  colour: '',
  Mark: '',
  composition: '',
  target: '',
};

export const validate = {
  description: Yup.string().required('Este campo es requerido'),
  category: Yup.string().required('Este campo es requerido'),
  price: Yup.string().required('Este campo es requerido'),
  stock: Yup.string().required('Este campo es requerido'),
  colour: Yup.string().required('Este campo es requerido'),
  Mark: Yup.string().required('Este campo es requerido'),
  composition: Yup.string().required('Este campo es requerido'),
  target: Yup.string().required('Este campo es requerido'),
};
