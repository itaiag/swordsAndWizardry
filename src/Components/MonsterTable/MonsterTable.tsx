import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {monsters} from '../../Data/Monsters'


export default function BasicTable() {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 0 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='right'>שם</TableCell>
            <TableCell align="right">קושי&nbsp;דירוג</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {monsters.map((monster) => (
            <TableRow 
            key={monster.שם} 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            onClick={() => window.location.href = `/monster?name=${encodeURIComponent(monster.שם)}`} // Use encodeURIComponent for encoding the name
            >
              <TableCell align="right" component="th" scope="row">
                {monster.שם}
              </TableCell>
              <TableCell align="right">{monster['דירוג קושי']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}