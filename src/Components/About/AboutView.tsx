import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';


const HomeView: React.FC = () => {
  return (
    <Box>
      <Typography variant='h5'  mt={2}>על האתר</Typography>

      <Divider />
      <Typography  mt={2}>
        ברוכים הבאים לאתר כלי עזר עבור מנחים של המשחק חרבות וכשפים
      </Typography>
      <Typography>
        <Box component={"span"} display={"block"}>
          המשחק חרבות וכשפים הינו משחק תפקידים שפותח ע"י ערן בן-סער מולוט, איתי אסף רייזמן-גרייף ומיכאל גורודין.
        </Box>
        <Box component={"span"} display={"block"}>
          לפרטים נוספים ולרכישה ניתן ללחוץ על הקישור <Link href='https://swordsandwizardry.co.il/'>הבא</Link>.

          אתר העזר פותח ע"י איתי אגמון
        </Box>
      </Typography>
      <img className='responsiveImage' src={`${process.env.PUBLIC_URL}/images/swords_and_wizardly_game.png`} alt="SnW Game" />
    </Box>

  );
};

export default HomeView;