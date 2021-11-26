/* export interface Team {
  abbreviation: string;
  nickname: string;
  city: string;
  rank: number;
  sport: string;
  logo: StaticImageData,
  record: {
      wins: number;
      losses: number;
      ties?: number;
      division: string;
      divisionRank: number
  }
}
*/

export interface Game {
  code: string;
  description: string;
  competitionDescription: string;
  league: string;
  status: GameStatus;
  home: Team;
  away: Team;
  date: string;
  location?: {
      arena: string;
      city: string;
  }
}

export interface Team {
  abbreviation: string;
  nickname: string;
  city: string;
  rank: number;
  sport: string;
  record?: {
      wins: number;
      losses: number;
      ties?: number;
      division: string;
      divisionRank: number
  }
}

export type GameStatus = 'tbd' | 'complete' | 'future' | 'active'

export interface Schedule {
  _meta: {
    buildDate: string;
  };
  games: Game[];
  teams: Team[];
  teamSchedules: Map<string, Game[]>
}