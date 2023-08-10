import { httpResponse, serverError } from "../models/http"

export abstract class Controller {
  abstract perform(httpRequest: any): Promise<httpResponse>

  handle = async (httpRequest: any): Promise<httpResponse> => {
    try {
      return await this.perform(httpRequest)
    } catch (error: any) {
      // Tratamento de erros aqui
      return serverError(error.message)
    }
  }
}



