import { Validation } from '@/presentation/protocols'

export const mockValidation = (): Validation => {
  class ValidationSub implements Validation {
    validate (input: any): Error {
      return null
    }
  }
  return new ValidationSub()
}
