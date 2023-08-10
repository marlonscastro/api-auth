import { httpResponse } from "../models/http";
import { Controller } from "./controller";

export class AuthController extends Controller {
  constructor() { super() }
  perform(httpRequest: any): Promise<httpResponse> {
    // 1º validar o email
    // 2º ambos os campos não podem ser vazios
  }
}