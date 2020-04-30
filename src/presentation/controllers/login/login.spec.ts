import { HttpRequest } from './../../protocols/http'
import { InvalidParamError } from './../../errors/invalid-params-error'
import { MissingParamError } from './../../errors'
import { LoginController } from './login'
import { badRequest } from '../../helpers/http-helper'
import { EmailValidator } from '../signup/signup-protocols'
import { serverError } from './../../helpers/http-helper'

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

const makeFakeRequest = (): HttpRequest => ({
  body: {
    email: 'any_email@mail.com',
    password: 'any_password'
  }
})

interface SutTypes {
  sut: LoginController
  emailValitadorStub: EmailValidator
}

const makeSut = (): SutTypes => {
  const emailValitadorStub = makeEmailValidator()
  const sut = new LoginController(emailValitadorStub)
  return {
    sut,
    emailValitadorStub
  }
}

describe('Login Controller', () => {
  test('Should return 400 if no email is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })

  test('Should return 400 if no password is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })

  test('Should return 400 an invalid email is provided', async () => {
    const { sut, emailValitadorStub } = makeSut()
    jest.spyOn(emailValitadorStub, 'isValid').mockReturnValueOnce(false)
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(badRequest(new InvalidParamError('email')))
  })

  test('Should call EmailValidator with correct email', async () => {
    const { sut, emailValitadorStub } = makeSut()
    const isValidSpy = jest.spyOn(emailValitadorStub, 'isValid')
    await sut.handle(makeFakeRequest())
    expect(isValidSpy).toHaveBeenCalledWith('any_email@mail.com')
  })

  test('Should return 5oo if EmailValidator throws', async () => {
    const { sut, emailValitadorStub } = makeSut()
    jest.spyOn(emailValitadorStub, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
