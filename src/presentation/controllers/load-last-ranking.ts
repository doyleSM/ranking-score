import { RankingScoreModel } from '../../data/models'
import { Controller, HttpResponse } from './contracts'

export class LoadLastRankingController implements Controller {
  async handle (): Promise<HttpResponse<RankingScoreModel>> {

  }
}
