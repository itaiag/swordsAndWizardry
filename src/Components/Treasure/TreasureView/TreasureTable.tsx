import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Item } from '../Item'

export default function TreasureTable({ items }: { items: Item[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='right'>חפץ</TableCell>
            <TableCell>סוג</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.filter(item => item.tablePointer === "").map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='right'>
                {item.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.type !== "" && item.type}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
