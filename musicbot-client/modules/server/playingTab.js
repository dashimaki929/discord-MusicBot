import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

export default function PlayingTab() {
  const { serverId } = useSelector((state) => state.server);

  return (
    <Grid>PlayingTab - serverID: {serverId}</Grid>
  );
}
