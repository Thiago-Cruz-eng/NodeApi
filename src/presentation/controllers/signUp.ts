export class SignUpController {
  handle (httpReques: any): any {
    return {
      statusCode: 400,
      body: new Error('missing param: name')
    }
  }
}
