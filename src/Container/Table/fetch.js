import axios from "axios"
import { getProduct } from "./slice"

export const fetchAllProducts = () => (dispatch) => {
  axios
  .get("http://localhost:4000/tennis")
  .then((response) => {
    dispatch(getProduct(response.data));
  })
  .catch(error => console.error(error));
}