import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const TEXT_LOGO = "MY BLOG";

interface ILogo {
  mobile?: boolean;
}

function Logo({ mobile }: ILogo) {
  const navigate = useNavigate();
  return <Typography
    variant="h6"
    noWrap
    sx={{
      fontWeight: 700,
      letterSpacing: '.3rem',
      cursor: "pointer"
    }}
    onClick={() =>
      navigate("/")
    }
  >
    {TEXT_LOGO}
  </Typography>

}

export default Logo;
