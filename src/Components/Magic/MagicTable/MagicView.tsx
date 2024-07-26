import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { allMagics} from '../../../data/magics';

const MagicView: React.FC = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const magicName = params.get('name');
  const magic = allMagics.find(m => m["שם"] === magicName);
  const navigate = useNavigate();

  

  if (!magic) {
    return <div>Magic not found</div>;
  }

  
  return (
    <Box className='main-box main-view' >
      <Box mt={2}>
        <Typography variant='h5'>{magic.שם}</Typography>
        <Divider />
      </Box>
      <Box mt={2}>
        <Typography mt={1}>טווח: {magic.טווח}</Typography>        
        <Typography mt={1}>משך השפעה: {magic.משך}</Typography>
        <Typography mt={1}>{magic.תיאור}</Typography>
      </Box>
      <Box mt={4}>
        <Button variant="contained" style={{ marginRight: '10px' }} onClick={() => navigate(-1)}>חזור</Button>       
      </Box>
    </Box>

  );
};

export default MagicView;