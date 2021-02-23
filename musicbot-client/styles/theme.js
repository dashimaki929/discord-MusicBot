import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

theme.typography.h3 = {
  fontSize: '2.4rem',
  fontWeight: '300',
  letterSpacing: '0.4em',
  [theme.breakpoints.up('md')]: {
    fontSize: '3.2rem',
  },
};

theme.typography.h6 = {
  fontSize: '0.8rem',
  fontWeight: '300',
  letterSpacing: '0.4em',
  marginTop: '8px',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};

export default theme;