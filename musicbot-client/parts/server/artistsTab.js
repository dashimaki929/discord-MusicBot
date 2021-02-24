import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

export default function ArtistsTab() {
  const { serverId } = useSelector((state) => state.server);

  return (
    <Grid>
      ArtistsTab - serverID: {serverId}
    </Grid>
  );
}
