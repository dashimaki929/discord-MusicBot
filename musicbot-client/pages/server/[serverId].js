import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import { setServerId } from '../../stores/server';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';

import PlayingTab from '../../parts/server/playingTab';
import PlaylistsTab from '../../parts/server/playlistsTab';
import ArtistsTab from '../../parts/server/artistsTab';
import SettingsTab from '../../parts/server/settingsTab';

export default function BotController() {
  const router = useRouter();
  const { serverId } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setServerId(serverId));
  }, [serverId]);

  const [tabIndex, setTabIndex] = useState(0);

  function handleChange(_, newValue) {
    setTabIndex(newValue);
  }

  return (
    <Grid>
      <ApplicationBar index={tabIndex} handleChange={handleChange} />
      <Container maxWidth="md">
        <TabPanel value={tabIndex} index={0}><PlayingTab /></TabPanel>
        <TabPanel value={tabIndex} index={1}><PlaylistsTab /></TabPanel>
        <TabPanel value={tabIndex} index={2}><ArtistsTab /></TabPanel>
        <TabPanel value={tabIndex} index={3}><SettingsTab /></TabPanel>
      </Container>
    </Grid>
  );
}

export function ApplicationBar({ index, handleChange }) {
  return (
    <AppBar position="fixed" color="default">
      <Tabs
        value={index}
        onChange={handleChange}
        variant="fullWidth"
        scrollButtons="on"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="PLAYING" icon={<PlayArrowIcon />} />
        <Tab label="PLAYLISTS" icon={<QueueMusicIcon />} />
        <Tab label="ARTISTS" icon={<AccountBoxIcon />} />
        <Tab label="SETTINGS" icon={<SettingsIcon />} />
      </Tabs>
    </AppBar>
  );
}

export function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box style={{ padding: '80px 0' }}>
          {children}
        </Box>
      )}
    </div>
  );
}