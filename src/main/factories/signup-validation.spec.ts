import { CompareFieldsValidation } from './../../presentation/helpers/validators/compare-fields-validation'
import { Validation } from './../../presentation/helpers/validators/validation'
import { RequiredFieldValidation } from './../../presentation/helpers/validators/required-field-validation'
import { makeSignUpValidation } from './signup-validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'

jest.mock('../../presentation/helpers/validators/validation-composite')

describe('SignUpValidation Factory', () => {
  test('Should call VvalidationComposite with call validations', () => {
    makeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
