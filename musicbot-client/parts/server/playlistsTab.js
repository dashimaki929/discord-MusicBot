import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

export default function PlaylistsTab() {
  const { serverId } = useSelector((state) => state.server);

  return (
    <Grid>PlaylistsTab - serverID: {serverId}</Grid>
  );
}
