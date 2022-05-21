import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { DeleteProduct, fetchgetGetEdithProduct } from "../../Container/Add/fetch";
import TableHeader from "../tableHead";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { TablePagination } from "@mui/material";
import { TableContainer } from "@mui/material";
import TablePaginationActions from "../tablePaginationActions";
import TableFooter from '@mui/material/TableFooter';
import deleteIcon from '../image/awesome-trash-alt.svg';
import editIcon from '../image/awesome-pencil-alt.svg';
import IconButton from '@mui/material/IconButton';
import { ItemImage } from "../../Container/Add/styles";

function descendingComparator(a,b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a,b) => descendingComparator(a,b, orderBy)
    : (a,b) => -descendingComparator(a,b, orderBy)

}

const sortedRowInformation = (rowArray, comparator) => {
  const stabilizeRowArray = rowArray.map((el, index) => [el, index]);
  stabilizeRowArray.sort((a,b) => {
    const order= comparator(a[0], b[0])
    if(order !== 0) return order;
    return a[1] - b[1];
  })
  return stabilizeRowArray.map((el) => el[0]);
}

const TableContainerData = () => {
  const [orderDirection, setOrderDirection] = useState('asc');
  const [valueToOrderBy, setValueToOrderBy] = useState('name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const rowInformation = useSelector((state) => state.product.productsList);
  // const dispatch = useDispatch()

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowInformation.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAscending = (valueToOrderBy === property && orderDirection === 'asc');
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? 'desc' : 'asc');
  }

  const edithProduct = (id) => {
    dispatch(fetchgetGetEdithProduct(id));
    navigate(`/edit/product/${id}`);
  }

  return(
    <>
      <TableContainer>
        <Table>
          <TableHeader 
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <TableBody>
            {sortedRowInformation(rowInformation, getComparator(orderDirection, valueToOrderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow key={uuidv4()}>
                  <TableCell>
                    <ItemImage 
                      className={product.stock.substr(0, 2)}
                      src={product.img} 
                      alt="image" 
                    />
                  </TableCell>
                  <TableCell style={{maxWidth: '200px'}}>
                    <p style={{textTransform: 'capitalize' }}>
                      <b>{product.category}</b>
                    </p>
                    {product.description}
                  </TableCell>
                  <TableCell>
                    {product.category}
                  </TableCell>
                  <TableCell>
                    {product.price}
                  </TableCell>
                  <TableCell>
                    {product.target}
                  </TableCell>
                  <TableCell>
                    <p className={product.stock.substr(0, 1)}>{product.stock}</p>
                  </TableCell>
                  <TableCell>
                    <IconButton 
                      onClick={() => edithProduct(product.id)}
                    >
                      <img src={editIcon} alt="editIcon" height="32px" />
                    </IconButton>
                    <IconButton
                      onClick={() => dispatch(DeleteProduct(product.id))}
                    >
                      <img src={deleteIcon} alt="deleteIcon" height="32px" />
                    </IconButton>
                  </TableCell>
                </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rowInformation.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableContainerData;
