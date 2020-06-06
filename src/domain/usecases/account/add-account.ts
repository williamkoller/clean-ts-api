import { AccountModel } from '@/domain/models/account/account'

export type AddAccountParams = Omit<AccountModel, 'id'>

export interface AddAccount {
  add: (account: AddAccountParams) => Promise<AccountModel>
}
