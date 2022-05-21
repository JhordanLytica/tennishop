import axios from "axios"
import { getProduct, serchProduct } from "./slice"

export const fetchAllProducts = () => (dispatch) => {
  axios
  .get("http://localhost:4000/tennis")
  .then((response) => {
    dispatch(getProduct(response.data));
  })
  .catch(error => console.error(error));
};

export const searchProducts = (value) => (dispatch) => {
  axios
  .get(`http://localhost:4000/tennis?category=${value}`)
  .then((response) => {
    dispatch(serchProduct(response.data));
  })
  .catch(error => console.error(error));
}