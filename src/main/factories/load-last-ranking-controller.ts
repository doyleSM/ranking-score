import { LastRankingLoaderService } from '../../data/services'
import { FakeRankingRepository } from '../../infra/repositories'
import { Controller } from '../../presentation/controllers/contracts'
import { LoadLastRankingController } from '../../presentation/controllers/load-last-ranking'

export const makeLoadLastRankingController = (): Controller => {
  const repo = new FakeRankingRepository()
  const loader = new LastRankingLoaderService(repo)
  return new LoadLastRankingController(loader)
}
