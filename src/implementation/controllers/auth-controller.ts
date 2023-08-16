import { badRequest, httpResponse } from "../models/http";
import { Controller } from "./controller";

export class AuthController extends Controller {
  constructor() { super() }

  async perform(httpRequest: any): Promise<httpResponse> {
    // 0º validar se os atributos vieram
    if (httpRequest.body.email && httpRequest.body.pass) {
      // 1º validar o email
      const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(httpRequest.body.email)
      if (!validEmail) {
        return badRequest('Email Inválido')
      }
      // Chamar o caso de uso
    }
    return badRequest('Está faltando parametros na requisição ou existe parametros inválidos')
  }
}