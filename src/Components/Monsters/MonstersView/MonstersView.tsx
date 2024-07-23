import * as React from 'react';
import Divider from '@mui/material/Divider';
import MonsterGrid from '../MonstersGrid/MonstersGrid';


const MonstersView: React.FC = () => {
    return (
      <div style={{ marginRight: '1px' }}>
        <h1>מפלצות</h1>
        <Divider />
        <MonsterGrid type = "מתחיל"/>
      </div>
      
    );
  };
  
  export default MonstersView;