import { TableCell } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableSortLabel } from "@mui/material";

const TableHeader = (props) => {

  const {valueToOrderBy, orderDirection, handleRequestSort} = props;

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  }
  
  return (
    <TableHead>
      <TableRow>
        <TableCell key="name">
          <TableSortLabel>
            Nombre
          </TableSortLabel>
        </TableCell>
        <TableCell key="descripcion">
        </TableCell>
        <TableCell key="category">
          <TableSortLabel>
            Categoria
          </TableSortLabel>
        </TableCell>
        <TableCell key="price">
          <TableSortLabel
            // eslint-disable-next-line no-self-compare
            active={valueToOrderBy === "price"}
            direction={valueToOrderBy === "price" ? orderDirection: 'asc'}
            onClick={createSortHandler("price")}
          >
            Precio
          </TableSortLabel>
        </TableCell>
        <TableCell key="target">
          <TableSortLabel
            // eslint-disable-next-line no-self-compare
            active={valueToOrderBy === "target"}
            direction={valueToOrderBy === "target" ? orderDirection: 'asc'}
            onClick={createSortHandler("target")}
          >
            Cantidad
          </TableSortLabel>
        </TableCell>
        <TableCell key="stock">
          <TableSortLabel>
            stock
          </TableSortLabel>
        </TableCell>
        <TableCell key="Action">
          <TableSortLabel>
            Acción
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;