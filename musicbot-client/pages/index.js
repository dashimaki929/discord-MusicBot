import { useState } from 'react';
import { useRouter } from 'next/router';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import InputIcon from '@material-ui/icons/Input';

import { makeStyles } from '@material-ui/core/styles';

export default function Home() {
  const styles = useStyles();

  return (
    <Grid className={styles.bg} container justify="center" direction="column">
      <Container maxWidth="md">
        <WelcomeCard />
      </Container>
    </Grid>
  );
}

export function WelcomeCard() {
  const [serverId, setServerId] = useState('');
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const styles = useStyles();

  function handleChange(e) {
    const id = e.target.value;
    setServerId(id);
    setHasError(checkServerId(id));
  }

  function handleClick() {
    if (serverId && !hasError) {
      router.push(`/server/${serverId}`);
    }
  }

  function handleSubmit(e) {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  function checkServerId(id) {
    if (id) {
      const validIdExp = new RegExp('^[0-9]{18}$');
      return !validIdExp.test(id);
    } else {
      return false;
    }
  }

  return (
    <Card style={{ textAlign: 'center', paddingTop: '16px', paddingBottom: '80px' }}>
      <Grid container justify="center" direction="column">
        <Grid>
          <img src="/icons/sound_animated_icon.gif" height="256" />
        </Grid>
        <Grid style={{ marginBottom: '64px' }}>
          <Typography variant="h3" color="primary">WELCOME</Typography>
          <Typography variant="h6" color="primary">Please enter the server ID.</Typography>
        </Grid>
        <Grid>
          <TextField
            className="searchTextBox"
            label="Server ID"
            variant="outlined"
            value={serverId}
            onChange={handleChange}
            onKeyPress={handleSubmit}
            error={hasError}
            helperText={hasError ? 'Incorrect server ID.' : ''}
          />
          <Button
            className={styles.customIconButton}
            color="primary"
            variant="contained"
            onClick={handleClick}
            disabled={!serverId || hasError}
          >
            <InputIcon />
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

const useStyles = makeStyles((theme) => ({
  bg: {
    height: '100%',
    background: "linear-gradient(315deg, #355c7d, #6c5b7b, #c06c84)",
  },
  customIconButton: {
    color: 'white',
    boxShadow: 'none',
    background: '#2196f3',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    padding: '16px',
  },
}));