import { HttpResponse, HttpResquest } from '../protocols/http'
export class SignUpController {
  handle (httpRequest: HttpResquest): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('missing param: name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('missing param: email')
      }
    }
  }
}
