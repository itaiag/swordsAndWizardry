import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import rollDice from '../../utils/DiceRoller';
import { MenuItem, FormControl, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';


export default function DiceRoller() {
    const [result, setResult] = useState<{ "roll": string, "result": number }[]>([]);
    const [numSides, setNumSides] = useState<number>(20);
    const [numOfRolls, setNumOfRolls] = useState<number>(1);

    const handleDiceSidesChange = (event: SelectChangeEvent) => {
        setNumSides(parseInt(event.target.value));

    };

    const handleNumOfRollsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (value > 0 && value < 100) {
            setNumOfRolls(value);
        }
    };

    function handleClear() {
        setResult([]);
    }

    function handleRoll() {

        const rollType: string = `${numOfRolls}ק${numSides}`;
        const rollResult: number = rollDice(numSides, numOfRolls);
        const newResult = [{ roll: rollType, result: rollResult }, ...result];
        setResult(newResult);
    }

    return (
        <Box className='main-box'>
            <Typography variant='h5'>הטלת קוביות</Typography>
            <Box mt={4}>
                <FormControl sx={{ minWidth: 140, mr: 2 }}>
                    <InputLabel id="dice-sides-list">קובייה</InputLabel>
                    <Select
                        labelId="dice-sides"
                        id="dice-sides"
                        label="אוצרות"
                        value={numSides + ""}
                        onChange={handleDiceSidesChange}
                        sx={{ minWidth: 140, marginRight: '10px' }}
                    >
                        <MenuItem value={3}>קוביית 3</MenuItem>
                        <MenuItem value={4}>קוביית 4</MenuItem>
                        <MenuItem value={6}>קוביית 6</MenuItem>
                        <MenuItem value={8}>קוביית 8</MenuItem>
                        <MenuItem value={10}>קוביית 10</MenuItem>
                        <MenuItem value={12}>קוביית 12</MenuItem>
                        <MenuItem value={20}>קוביית 20</MenuItem>
                        <MenuItem value={100}>קוביית 100</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="num-of-dice"
                    label="הטלות"
                    variant="standard"
                    value={numOfRolls}
                    type='number'

                    inputProps={{ maxLength: 2, min: 1, max: 99 }}
                    InputLabelProps={{
                        style: { direction: 'rtl' },
                    }}
                    sx={{ width: 60, mr: 2, marginRight: '30px' }}
                    onChange={handleNumOfRollsChange} />

                <Button variant="outlined" style={{ marginRight: '30px' }} sx={{ mr: 2 }} onClick={handleClear}>נקה</Button>
            </Box>
            <Box mt={2} display={"flex"} justifyContent={"center"}>
                <Button variant="contained" style={{ width: '90%' }}  onClick={handleRoll}>גלגל</Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100, fontSize: '1.25rem' }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell align='right'>גלגול</TableCell>
                            <TableCell align='right'>תוצאה</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {result.map((res, index) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                            >
                                <TableCell component="th" scope="row" align='right'>
                                    {res.roll}
                                </TableCell>
                                <TableCell component="th" scope="row" align='right'>
                                    {res.result}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
