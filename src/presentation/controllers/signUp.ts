import { HttpResponse, HttpResquest } from '../protocols/http'
import { MissingParamError } from '../errors/missingParamError'
export class SignUpController {
  handle (httpRequest: HttpResquest): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}
