import { useState, MouseEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ColorModeContext } from '../../constants/contexts';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Logo from '../atoms/logo';
import ModeSwitch from '../atoms/modeSwitch';

const pages = ['Articles', 'About'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, gap: 3, display: 'flex', flexDirection: { xs: "row-reverse", md: "row" }, alignItems: "center", justifyContent: { xs: "flex-end", md: "flex-start" } }}>
            <Logo />
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => {
                    console.log("click mobile")
                    navigate(page.toLocaleLowerCase())
                  }}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    console.log("click")
                    navigate(page.toLocaleLowerCase())
                  }}
                  sx={{ my: 1, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ModeSwitch onClick={colorMode.toggleColorMode} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}



export default ResponsiveAppBar;
