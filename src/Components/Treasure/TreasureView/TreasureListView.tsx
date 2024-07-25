import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { MenuItem, FormControl, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Item } from '../Item';
import TreasureTable from './TreasureTable';
import { potions } from '../../../data/potions';
import { scrolls } from '../../../data/scrolls';
import { magicalWeapons } from '../../../data/magicalWeapons';
import { magicalItems } from '../../../data/magicalItems';
import { Typography } from '@mui/material';

export default function TreasureListView() {

    const [treasure, setTreasure] = React.useState('');
    const [items, setItems] = useState<null | Item[]>();
    const handleChange = (event: SelectChangeEvent) => {
        setItems(null);
        let treasure: string = event.target.value + "";
        setTreasure(treasure);
        let items: Array<Item> = [];
        let index = 0;

        switch (treasure) {
            case "10":
                console.log('showing potions');
                items = potions.map(potion => { return new Item(index++, potion.שם, 0, potion.סוג) });
                break;
            case "20":
                console.log('showing scrolls');
                items = scrolls.map(scroll => { return new Item(index++, scroll.שם, 0, scroll.סוג, scroll['מצביע לטבלה']) });
                break;
            case "30":
                console.log('showing magical weapons');
                items = magicalWeapons.map(weapon => { return new Item(index++, weapon.שם, 0) });
                break;
            case "40":
                console.log('showing magical items');
                items = magicalItems.map(item => { return new Item(index++, item.שם, 0, item.סוג) });
                break;

        }
        setItems(items);

    };

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
                    <InputLabel id="treasure-list">סוג אוצר</InputLabel>
                    <Select
                        labelId="treasure-list"
                        id="treasure-list"
                        value={treasure}
                        label="אוצרות"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>שיקויים</MenuItem>
                        <MenuItem value={20}>מגילות</MenuItem>
                        <MenuItem value={30}>כלי נשק קסומים</MenuItem>
                        <MenuItem value={40}>חפצים קסומים</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {items && <TreasureTable items={items} />}

        </Box>
    );
}


