import { SignUpController } from './signUp'

describe('Sign Up Controller', () => {
  test('Should return 400 i no name if provider', () => {
    // sempre comeco instancxiando a classe
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'abc@gmail.com',
        password: '123456789',
        passwordConfirmation: '123456789'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
