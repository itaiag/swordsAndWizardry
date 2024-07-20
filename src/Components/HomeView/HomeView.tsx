import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
// import backgroundImage from '../../assets/imgs'; // Adjust the path as necessary

const HomeView: React.FC = () => {
    return (
      <div style={{ marginRight: '1px' }}>
        <h1>חרבות וכשפים</h1>
        <Divider />
         <Typography>
              ברוכים הבאים לאתר כלי עזר עבור מנחים של המשחק חרבות וכשפים
        </Typography>
        <img className='responsiveImage' src={`${process.env.PUBLIC_URL}/images/home.jpg`} alt="Home Background" />
        {/* <img src={backgroundImage} alt="Home Background" /> */}
      </div>
      
    );
  };
  
  export default HomeView;