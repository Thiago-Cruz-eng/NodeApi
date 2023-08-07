import { HttpResponse, HttpResquest } from '../protocols/http'
import { MissingParamError } from '../errors/missingParamError'
import { InvalidParamError } from '../errors/invalidParamError'
import { badRequest } from '../helpers/httpHelper'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/emailValidator'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpResquest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
