import { AccountModel } from '@/domain/models/account/account'

export interface LoadAccountByToken {
  load: (accessToken: string, role?: string) => Promise<AccountModel>
}
