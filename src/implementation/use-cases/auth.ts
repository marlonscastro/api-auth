import { AuthResponse } from "../../domain/models/auth-response";
import { AuthUseCase } from "../../domain/use-cases/auth";

interface AuthParams {
    email: string,
     pass: string
}

// Repository 
// TokenGenerator
export class Auth implements AuthUseCase {
    execute = (email: string, pass: string): AuthResponse => {
        // 3º validar se o usuario existe atraves do seu email
        // 4º validar se senha confere
    }   
}