export interface RankingScoreViewModel {
  player: Player
  score: number
  matchDate: string
  heroes: Hero[]
}

interface Player {
  name: string
  country: string
}

interface Hero {
  name: string
  level: number
}
