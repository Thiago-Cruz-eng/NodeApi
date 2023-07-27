import { HttpResponse, HttpResquest } from '../protocols/http'
import { MissingParamError } from '../errors/missingParamError'
import { badRequest } from '../helpers/httpHelper'

export class SignUpController {
  handle (httpRequest: HttpResquest): HttpResponse {
    if (!httpRequest.body.name) {
        return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
		return badRequest(new MissingParamError('email'))
    }
  }
}
