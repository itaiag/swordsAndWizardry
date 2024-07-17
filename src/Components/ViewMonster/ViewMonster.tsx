import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { monsters } from '../../Data/Monsters';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const ViewMonster: React.FC = () => {
    
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const monsterName = params.get('name');
  const monster = monsters.find(monster => monster["שם"] === monsterName);
  const navigate = useNavigate();

  if (!monster) {
    return <div>Monster not found</div>;
  }

  return (
    <div style={{ marginRight: '20px' }}>
      <h1>{monster.שם}</h1>
      <Divider />
      <p>קושי דירוג: {monster['דירוג קושי']}</p>
      <p>קב"פ: {monster['קב"פ']}</p>
      <p>התקפות: {monster['התקפות']}</p>
      <p>גלגול הצלה: {monster['גלגול הצלה']}</p>
      <p>דירוג קושי: {monster['דירוג קושי']}</p>
      <p>נקודות נסיון: {monster['נקודות נסיון']}</p>
      <p>מיוחד: {monster['מיוחד']}</p>
      <p>עמוד: {monster['עמוד']}</p>
      
      <Button variant="contained" onClick={() => navigate(-1)}>חזור</Button>
    </div>
    
  );
};

export default ViewMonster;