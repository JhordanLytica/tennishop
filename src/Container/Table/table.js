import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "./fetch";
import { fetchCategories, fetchMarck, fetchStock } from "../Add/fetch";
import HeaderTable from "../../components/headerTable";
import TableContainerData from "../../components/tableContainer";

const TableData = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchAllProducts());
    dispatch(fetchCategories());
    dispatch(fetchMarck());
    dispatch(fetchStock());
  }, [dispatch])
  return (
    <div>
      <HeaderTable />
      <TableContainerData />
    </div>
  );
}

export { TableData };