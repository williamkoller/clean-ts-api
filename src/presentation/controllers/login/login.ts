import { MissingParamError } from './../../errors'
import { badRequest } from './../../helpers/http-helper'
import { Controller, HttpResponse, HttpRequest } from '../../protocols'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }
    if (!httpRequest.body.password) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }
  }
}
