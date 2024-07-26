import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { monsters } from '../../../data/Monsters';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import rollDice from '../../../utils/DiceRoller';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const MonsterView: React.FC = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const monsterName = params.get('name');
  const monster = monsters.find(monster => monster["שם"] === monsterName);
  const navigate = useNavigate();
  const [hitDice, setHitDice] = useState(0);

  useEffect(() => {
    setHitDice(rollHitDice()); // Step 5: Update hitDice state
  }, [])


  if (!monster) {
    return <div>Monster not found</div>;
  }

  function rollHitDice() {
    if (!monster) {
      return 0;
    }
    const diceType = monster['קוביית קב"פ'];
    const numDice = monster['גלגולי קב"פ'];
    const modifier = monster['תוספת לקב"פ']
    const diceResult = rollDice(diceType, numDice);
    const total = diceResult + modifier;
    console.log(`Dice type: ${diceType}, numDice: ${numDice}, modifier: ${modifier}: Dice Result ${diceResult}, Total: ${total}`);
    return total;
  }



  return (
    <Box className='main-box main-view' >
      <Box mt={2}>
        <Typography variant='h5'>{monster.שם}</Typography>
        <Divider />
      </Box>
      <Box mt={2}>
        <Typography mt={1}>דירוג קושי: {monster['דירוג קושי']}</Typography>
        <Typography mt={1}>קב"פ: {monster['תיאור קב"פ']}</Typography>
        <Typography mt={1}>התקפות: {monster['התקפות']}</Typography>
        <Typography mt={1}>גלגול הצלה: {monster['גלגול הצלה']}</Typography>
        <Typography mt={1}>דירוג קושי: {monster['דירוג קושי']}</Typography>
        <Typography mt={1}>נקודות נסיון: {monster['נקודות נסיון']}</Typography>
        <Typography mt={1}>מיוחד: {monster['מיוחד']}</Typography>
        <Typography mt={1}>עמוד: {monster['עמוד']}</Typography>
        <Typography mt={1}>נקודות פגיעה מחושבות:&nbsp;
          <Typography component={"span"} fontWeight="bold" mt={1}>
            {hitDice}
          </Typography>
        </Typography>
      </Box>
      <Box mt={4}>
        <Button variant="contained" style={{ marginRight: '10px' }} onClick={() => navigate(-1)}>חזור</Button>
        <Button variant="outlined" style={{ marginRight: '10px' }} onClick={() => setHitDice(rollHitDice())}>חשב נק"פ</Button>
      </Box>
    </Box>

  );
};

export default MonsterView;