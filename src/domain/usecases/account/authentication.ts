import { AuthenticationModel } from '@/domain/models/account/authentication'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (authenticationParams: AuthenticationParams) => Promise<AuthenticationModel>
}
