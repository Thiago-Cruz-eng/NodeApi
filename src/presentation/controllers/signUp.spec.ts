import { SignUpController } from './signUp'
import { MissingParamError } from '../errors/missingParamError'

describe('Sign Up Controller', () => {
  test('Should return 400 if no name is provider', () => {
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
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email is provider', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'Thiago',
        password: '123456789',
        passwordConfirmation: '123456789'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provider', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'abc@gmail.com',
        name: 'Thiago',
        passwordConfirmation: '123456789'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
})
