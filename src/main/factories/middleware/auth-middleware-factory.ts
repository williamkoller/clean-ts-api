import { AuthMiddleware } from '@/presentation/middleware/auth-middleware'
import { Middleware } from '@/presentation/protocols/middleware'
import { makeDbAccountByToken } from '@/main/factories/usecases/account/load-account-by-token/db-load-account-by-token-factory'

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbAccountByToken(), role)
}
