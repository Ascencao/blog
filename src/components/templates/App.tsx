import { Suspense, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

import { themeOptions } from "../../constants/theme"
import { Home, Articles, About, NoMatch } from "../../constants/pages"

import ResponsiveAppBar from '../molecules/navbar';

import { ColorModeContext } from '../../constants/contexts';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        ...themeOptions,
        palette: {
          mode,
          ...themeOptions.palette
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <ResponsiveAppBar />
          <Box component="main"
            width="100%"
            minHeight="100vh"
            pb={2}
            pt={{ xs: 9, sm: 10 }}
            px={{ xs: 2, sm: 3 }}>
            <Suspense fallback={
              <Box minHeight="100vh" sx={{ display: 'flex' }} justifyContent="center" alignItems="center">
                <CircularProgress color="secondary" />
              </Box>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </Suspense>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider >
  );
}

export default App;
