import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

export default function SettingsTab() {
  const { serverId } = useSelector((state) => state.server);

  return (
    <Grid>SettingsTab - serverID: {serverId}</Grid>
  );
}
