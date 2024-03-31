import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem"fontFamily="Helvetica, Arial, sans-serif">
     <span style={{ color: "maroon" }}>FAG</span>Flix
    </Typography>
  );
};

export default Logo;