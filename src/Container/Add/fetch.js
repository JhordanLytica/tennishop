import axios from "axios"
import { getCategories, getStock, getMarck, getEdithProduct } from "./slice"
import { fetchAllProducts } from "../Table/fetch";

export const fetchCategories = () => (dispatch) => {
  axios
  .get("http://localhost:4000/categories")
  .then((response) => {
    dispatch(getCategories(response.data));
  })
  .catch(error => console.error(error));
};

export const fetchStock = () => (dispatch) => {
  axios
  .get("http://localhost:4000/stock")
  .then((response) => {
    dispatch(getStock(response.data));
  })
  .catch(error => console.error(error));
};

export const fetchMarck = () => (dispatch) => {
  axios
  .get("http://localhost:4000/Marck")
  .then((response) => {
    dispatch(getMarck(response.data));
  })
  .catch(error => console.error(error));
};

export const fetchAddProduct = data => {
  axios.post('http://localhost:4000/tennis', data)
  .then(function (response) {
    console.log(response);
    window.history.back();
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const DeleteProduct = id => (dispatch) => {
  axios.delete(`http://localhost:4000/tennis/${id}`)
  .then(function (response) {
    console.log(response);
    dispatch(fetchAllProducts());
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const fetchgetGetEdithProduct = id => (dispatch) => {
  axios.get(`http://localhost:4000/tennis/${id}`)
  .then(function (response) {
    console.log(response);
    dispatch(getEdithProduct(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const fetchEdithProduct = (values, id) => (dispatch) => {
  axios.put(`http://localhost:4000/tennis/${id}`, values)
  .then(function (response) {
    console.log(response);
    window.history.back();
  })
  .catch(function (error) {
    console.log(error);
  });
}