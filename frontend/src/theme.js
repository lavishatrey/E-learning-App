// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light', // Set initial mode to 'light' or 'dark'
  useSystemColorMode: false, // Don't use system preference
};

const theme = extendTheme({ config });

export default theme;