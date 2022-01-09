import React from 'react';
import TeamCard from './team-card';
import type {Game} from '../lib/model';
import NetworkLogo from './network-logo';
import {DateTime} from 'luxon';
import {formatDate, formatTime} from '../lib/utils';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function GameCard({game, showDate}: { game: Game, showDate?: boolean }) {
  const gameTime = DateTime.fromISO(game.date);
  const rightColumnStackStyle = {height: '100%', 'border-left': '1px solid rgba(0, 0, 0, 0.12)'} as const;
  return (
    <Card variant="outlined" sx={{maxWidth: '450px'}}>
      <Box sx={{bgcolor: game.topTenMatchup ? 'info.main' : undefined}}>
        <CardContent>
          <Grid container>
            <Grid item xs={8}>
              <Stack alignItems="center" spacing={0} justifyContent="center" direction="column">
                <TeamCard team={game.away}/>
                <TeamCard team={game.home}/>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack alignItems="center" spacing={0} justifyContent="center" direction="column"
                     sx={rightColumnStackStyle}>
                <NetworkLogo name={game.nationalNetwork}/>
                {showDate &&
                  <Typography paragraph={true} variant="subtitle1" color="text.secondary" align="center">
                    {formatDate(gameTime)}
                  </Typography>
                }
                <Typography paragraph={true} variant="subtitle1" color="text.secondary" align="center">
                  {formatTime(gameTime)}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack>
                <Typography variant="subtitle1" color="text.secondary" align="center">
                  {game.competitionDescription}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" align="center">
                  {game.location.arena}, {game.location.city}, {game.location.state}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Card>
  );
}
