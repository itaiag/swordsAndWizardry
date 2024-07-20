import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { monsters } from '../../data/Monsters';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import './MonsterView.css';
import rollDice from '../../utils/DiceRoller';
import { useState } from 'react';

const MonsterView: React.FC = () => {
    
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const monsterName = params.get('name');
  const monster = monsters.find(monster => monster["שם"] === monsterName);
  const navigate = useNavigate();
  const [hitDice, setHitDice] = useState(rollHitDice()); 
  
  
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
    <div className='data-view' >
      <h1>{monster.שם}</h1>
      <Divider />
      <p>דירוג קושי: {monster['דירוג קושי']}</p>
      <p>קב"פ: {monster['תיאור קב"פ']}</p>
      <p>התקפות: {monster['התקפות']}</p>
      <p>גלגול הצלה: {monster['גלגול הצלה']}</p>
      <p>דירוג קושי: {monster['דירוג קושי']}</p>
      <p>נקודות נסיון: {monster['נקודות נסיון']}</p>
      <p>מיוחד: {monster['מיוחד']}</p>
      <p>עמוד: {monster['עמוד']}</p>
      <p>נקודות פגיעה מחושבות: 
        <span style={{marginRight: '5px', fontWeight: 'bold'}}>
         {hitDice}
        </span>
      </p>
      
      <Button variant="contained" style={{ marginRight: '10px' }} onClick={() => navigate(-1)}>חזור</Button>
      <Button variant="outlined" style={{ marginRight: '10px' }} onClick={() => setHitDice(rollHitDice())}>חשב נק"פ</Button>
    </div>
    
  );
};

export default MonsterView;