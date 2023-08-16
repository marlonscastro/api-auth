import { UserNotFound } from "../../domain/errors/user-not-found"
import { httpResponse, serverError } from "../models/http"

export abstract class Controller {
  abstract perform(httpRequest: any): Promise<httpResponse>

  handle = async (httpRequest: any): Promise<httpResponse> => {
    try {
      return await this.perform(httpRequest)
    } catch (error: any) {
      // Tratamento de erros aqui
      if(error instanceof UserNotFound) {
        return unauthorized()
      }
      return serverError(error.message)
    }
  }
}



