import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import TreasureTable from './GeneratedTreasureTable';
import { calculateItems } from './TreasureCalculator'
import { Item } from '../Item'
import '../Treasure.css';

export default function TreasureCalcView() {
    const [textFieldValue, setTextFieldValue] = useState('');
    const [items, setItems] = useState<null | Item[]>();

    // Step 2: Update the state on text field change
    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextFieldValue(event.target.value);
    };

    // Step 3: Add an onClick event handler to the button


    const handleClick = () => {
        setItems(null);
        const experiencePoints = parseInt(textFieldValue);
        let calculatedItems = calculateItems(experiencePoints);
        setItems(calculatedItems);
    };

    return (
        <Box
            className='treasure-view'
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '35ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="standard-basic"
                label="נקודות נסיון"
                variant="standard"
                value={textFieldValue}
                placeholder='הכנס נקודות נסיון'
                InputLabelProps={{
                    style: { direction: 'rtl' },
                }}
                onChange={handleTextFieldChange} />
            <br />
            <Button variant="contained" onClick={handleClick}>חשב</Button>
            {!items && <p id='description'>על מנת לקבוע באופן אקראי את האוצר של מפלצת כלשהי יש ראשית להכפיל את ערך הנק"ן שלה ב1ק3 + 1. זה סך ערך האוצר במטבעות זהב. אין פירוש הדבר כי כל האוצר כולו הוא במטבעות זהב, ערך זה ישמש אותך כבסיס לקביעת תוכן האוצר עצמו.
                בשלב הבא, בעבור כל 100 מטבעות זהב מערך האוצר, גלגלי 1ק10. אם התוצאה היא 10, נתח זה מן האוצר יגולם באבן חן כלשהי, תכשיט יקר ערך או אולי אף אביזר קסום. גלגלי ק20  אם התוצאה היא 1-19, יש לגלגל פעם אחת בטבלת אבני חן ותכשיטים פשוטים לקביעת התכולה. אם התוצאה היא 20, יש לגלגל גם בטבלת חפצי קסם פשוטים. אם יש לבצע את הגלגול עבור 100 מטבעות זהב, כך לדוגמא מתוך אוצר בעל 720 מטבעות זהב, יש לגלגל 7 פעמים 1ק10 (ואף פעם נוספת עבור 100 מטבעות אם להחליף או לא).
            </p>}
            {items && <TreasureTable items={items} />}
        </Box>
    );
}


