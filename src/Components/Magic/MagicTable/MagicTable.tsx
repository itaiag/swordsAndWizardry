import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';


export default function MagicTable({ magics }: { magics: string[] }) {
  
  const navigate = useNavigate();

  const handleRowClick = (magicName: string) => {
    console.log(magicName);
    navigate(`/magic?name=${encodeURIComponent(magicName)}`);
};
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableBody>
          {magics.map((magic) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => handleRowClick(magic)}
            >
              <TableCell component="th" scope="row" align='right'>
                {magic}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
