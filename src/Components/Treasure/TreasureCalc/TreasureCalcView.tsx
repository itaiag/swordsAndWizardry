import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import TreasureTable from './GeneratedTreasureTable';
import { calculateItems } from './TreasureCalculator'
import { Item } from '../Item'
import Divider from '@mui/material/Divider';

export default function TreasureCalcView() {
    const [textFieldValue, setTextFieldValue] = useState('');
    const [items, setItems] = useState<null | Item[]>();

    // Update the state on text field change
    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextFieldValue(event.target.value);
    };

    // Add an onClick event handler to the button
    const handleClick = () => {
        setItems(null);
        const experiencePoints = parseInt(textFieldValue);
        let calculatedItems = calculateItems(experiencePoints);
        setItems(calculatedItems);
    };

    return (
        <Box className='main-box'>
            <Box
                className='main-box'
                component="form"
                alignContent='center'
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    id="standard-basic"
                    label="נקודות נסיון"
                    variant="standard"
                    value={textFieldValue}
                    type='number'
                    placeholder='הכנס נקודות נסיון'
                    InputLabelProps={{
                        style: { direction: 'rtl' },
                    }}
                    onChange={handleTextFieldChange} />
                <br />
                <Button

                    variant="contained" onClick={handleClick}>חשב</Button>
            </Box>
            {!items &&

                <Box id='description'>
                    <Box>
                        <Typography align='center' variant='h5'>
                            עבור יצירה של אוצר אקראי, הזן את נקודות הניסיון של המפלצת
                        </Typography>
                        <Divider />
                    </Box>
                    <Box component="span" display="block">
                        <Typography variant='body1' >
                            האוצר נקבע באופן אקראי בהתאם לתיאור בחוברת למנחה עמוד 64
                        </Typography>
                    </Box >
                    <Box component="span" display="block">
                        <Typography variant='body1' sx={{ fontStyle: 'italic' }}>
                            "על מנת לקבוע באופן אקראי את האוצר של מפלצת כלשהי יש ראשית להכפיל את ערך הנק"ן שלה ב1ק3 + 1. זה סך ערך האוצר במטבעות זהב. אין פירוש הדבר כי כל האוצר כולו הוא במטבעות זהב, ערך זה ישמש אותך כבסיס לקביעת תוכן האוצר עצמו.
                            בשלב הבא, בעבור כל 100 מטבעות זהב מערך האוצר, גלגלי 1ק10. אם התוצאה היא 10, נתח זה מן האוצר יגולם באבן חן כלשהי, תכשיט יקר ערך או אולי אף אביזר קסום. גלגלי ק20  אם התוצאה היא 1-19, גלגלי פעם אחת בטבלת אבני חן ותכשיטים פשוטים לקביעת התחליף. אם התוצאה היא 20, גלגלי פעם אחת  בטבלת חפצי קסם פשוטים"
                            <Box component="span" display="block">
                                "בשלב שלישי, אם ערך האוצר גדול במיוחד, יש לבצע גלגול ק10 נוספת עבור כל 1000 מטבעות זהב מערך האוצר ההתחלתי, ואם התוצאה היא 10, נתח זה מהאוצר יגולם באבני חן, תכשיטים או אביזרים קסומים יקרים ונדירים במיוחד"
                            </Box>
                            <Box component="span" display="block">
                                "אם תוצאת הגלגול היא 10 גלגלי ק20. ואם התוצאה היא 1 עד 19 גלגלי פעם אחת בטבלת אבני חן ותכשיטים יקרים לקביעת התחליף. אם התוצאה היא 20, גלגלי פעם אחת בטבלת חפצי קסם יקרי ערך."
                            </Box>
                        </Typography>
                    </Box>
                </Box>
            }
            {items && <TreasureTable items={items} />}

        </Box>
    );
}


