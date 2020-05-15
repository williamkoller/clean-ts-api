
import { AccountMongoRepository } from '@/infra/db/mongodb/account/account-mongo-repository'
import { DbLoadAccountByToken } from '@/data/usercases/load-account-by-token/db-load-account-by-token'
import { JwtAdapter } from '@/infra/criptography/jwt-adapter/jwt-adapter'
import env from '@/main/config/env'
import { LoadAccountByToken } from '@/domain/usercases/load-account-by-token'

export const makeDbAccountByToken = (): LoadAccountByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(jwtAdapter, accountMongoRepository)
}
