import { AddAccountParams } from '@/domain/usecases/account/add-account'
import { AccountModel } from '@/domain/models/account/account'

export interface AddAccountRepository {
  add: (data: AddAccountParams) => Promise<AccountModel>
}
