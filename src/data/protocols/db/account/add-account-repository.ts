import { AccountModel } from '@/domain/models/account'
import { AddAccountModel } from '@/domain/usercases/account/add-account'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
