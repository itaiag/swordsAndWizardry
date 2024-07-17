import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function BasicTextFields() {
    const [textFieldValue, setTextFieldValue] = useState('');
    
      // Step 2: Update the state on text field change
      const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextFieldValue(event.target.value);
    };

    // Step 3: Add an onClick event handler to the button
    const handleClick = () => {
        console.log(textFieldValue); // This will print the value of the text field
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
                id="standard-basic" 
                label="נקודות נסיון" 
                variant="standard"
                value={textFieldValue} 
                onChange={handleTextFieldChange}/>
            <br/>
            <Button variant="contained" onClick={handleClick}>חשב</Button>
        </Box>
    );
}
