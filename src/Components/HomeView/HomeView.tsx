import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';

const HomeView: React.FC = () => {
  return (
    <Box className="main-box">
      <Typography variant='h4' mt={2}>חרבות וכשפים</Typography>
      <Divider />
      <Typography>
        <Box mt={2} component={"span"} display={"block"}>
         ברוכים הבאים לאתר כלי עזר עבור מנחות של המשחק
         &nbsp;
        <Link href='https://swordsandwizardry.co.il/'>חרבות וכשפים</Link>
        .
        </Box>
        <Box component={"span"} display={"block"}>
        האתר מכיל טבלאות, מחשבונים וכלי עזר נוספים שמסייעים לתהליך הנחיה שוטף יותר. הוא כולל רשימות של מפלצות, טבלאות חפצים קסומים ויקרי ערך ומחשבון לחישוב אקראי של אוצרות.
        </Box>
      </Typography>
      <img className='image' src={`${process.env.PUBLIC_URL}/images/home.jpg`} alt="Home Background" />
    </Box>

  );
};

export default HomeView;