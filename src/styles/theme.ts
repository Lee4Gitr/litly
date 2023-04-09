import { createTheme, darken, lighten, PaletteColorOptions } from '@mui/material/styles';

const makeShades = (color: string): PaletteColorOptions => {
  return {
    dark: darken(color, 0.3),
    main: color,
    light: lighten(color, 0.3),
    contrastText: '#454545'
  }
}
export const theme = createTheme({

  palette: {
    primary: makeShades('#6F8C30'),
    secondary: makeShades('#575943'),
    error: makeShades('#D12923'),
    warning: makeShades('#FF9623'),
    info: makeShades('#4B5E78'),
    success: makeShades('#6F8C30'),
    common: {
      white: '#D8D9D7',
      black: '#454545'
    },
  },
});

