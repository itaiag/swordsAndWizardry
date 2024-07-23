import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MonsterGrid from './MonstersGrid/MonstersGrid';
import { Divider } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabbedMonstersView() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="מתחיל" {...a11yProps(0)} />
          <Tab label="מתקדם" {...a11yProps(1)} />
          <Tab label="נוספות" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <h2>מפלצות למנחה המתחילה</h2>
        <Divider />
        <MonsterGrid type='מתחיל' />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h2>מפלצות למנחה המתקדמת</h2>
        <Divider />
        <MonsterGrid  type='מתקדם'/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <h2>מפלצות נוספות</h2>
        <Divider />
        <MonsterGrid  type='נוספות'/>
      </CustomTabPanel>
    </Box>
  );
}
