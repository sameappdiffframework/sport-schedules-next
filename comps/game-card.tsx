import React from 'react'
import styles from '../styles/game-card.module.scss'
import TeamCard from './team-card'
import type { Game } from '../lib/model'
import NetworkLogo from './network-logo'
import { DateTime } from 'luxon'
import { formatDate, formatTime } from '../lib/utils'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

export default function GameCard({ game, showDate }: { game: Game, showDate?: boolean }) {
    // const classes = (game.topTenMatchup) ? [styles.gameCard, styles.highlight] : [styles.gameCard];
    const gametime = DateTime.fromISO(game.date);
    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Stack>
                            <Typography variant="h4">{game.away.nickname}</Typography>
                            <Typography variant="h4">{game.home.nickname}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack alignItems="center" spacing={0}>
                            <NetworkLogo name={game.nationalNetwork} />
                            {showDate === true &&
                                <Typography variant="subtitle1" color="text.secondary" align="center">
                                    {formatDate(gametime)}
                                </Typography>
                            }
                            <Typography variant="subtitle1" color="text.secondary" align="center">
                                {formatTime(gametime)}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack>
                            <Typography variant="h6" color="text.secondary" align="center">
                                {game.competitionDescription}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" align="center">
                                {game.location.arena}, {game.location.city}, {game.location.state}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        /*         <div>
                    <div>
                        <div>
                            <TeamCard team={game.away} />
                        </div>
                        <div>
                            <TeamCard team={game.home} />
                        </div>
                        <div>
                            <NetworkLogo name={game.nationalNetwork} />
                            {showDate === true && <p>{formatDate(gametime)}</p>}
                            <p>{formatTime(gametime)}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            {game.competitionDescription}
                        </div>
                        <div>
                            {game.location.arena}, {game.location.city}, {game.location.state}
                        </div>
                    </div>
                </div > */
    );
}
