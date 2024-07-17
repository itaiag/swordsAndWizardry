import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {monsters} from '../../Data/Monsters'


const MonsterTable: React.FC = () => {
  const navigate = useNavigate();

  const handleRowClick = (monsterName: string) => {
    navigate(`/monster?name=${encodeURIComponent(monsterName)}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 0,  marginRight: 1 }} aria-label="simple table">
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
            onClick={() => handleRowClick(monster.שם)}
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

export default MonsterTable;