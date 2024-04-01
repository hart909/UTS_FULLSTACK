import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="1000" fontSize="2rem"fontFamily="Helvetica, Arial, sans-serif">
     <span style={{ color: "maroon" }}>FGA</span>Flix
    </Typography>
  );
};

export default Logo;