import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { MenuItem, FormControl, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { allMagics } from '../../../data/magics';
import MagicTable from './MagicTable';

export default function MagicTableComponent({ type }: { type: string }) {

    const [level, setLevel] = React.useState('1');
    const [magicList, setMagicList] = useState<null | string[]>();

    const handleChange = (event: SelectChangeEvent | null) => {
        setMagicList(null);
        let level: string = event ? event.target.value + "": "1";
        setLevel(level);
        let index = 0;
        const magicListToShow: Array<string> = allMagics
            .filter(m => m.סוג === type)
            .filter(m => m.עוצמה === parseInt(level))
            .map(m => m.שם);
        setMagicList(magicListToShow);

    };

    useEffect(() => {
        handleChange(null);
    }, []);


    return (
        <Box className='main-box'>
            <Box
                className='main-box'
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl fullWidth>
                    <InputLabel id="magic-list">עוצמה</InputLabel>
                    <Select
                        labelId="magic-level"
                        id="magic-level"
                        value={level}
                        label="עוצמה"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>עוצמה ראשונה</MenuItem>
                        <MenuItem value={2}>עוצמה שנייה</MenuItem>
                        <MenuItem value={3}>עוצמה שלישית</MenuItem>                        
                    </Select>
                </FormControl>
            </Box>
            {magicList && <MagicTable magics={magicList} />}

        </Box>
    );
}


