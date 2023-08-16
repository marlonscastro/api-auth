import { AuthResponse } from "../../domain/models/auth-response";
import { AuthUseCase } from "../../domain/use-cases/auth";
import { Repository } from "../protocols/repositories/repository";

interface AuthParams {
    email: string,
    pass: string
}

// Repository 
// TokenGenerator
export class Auth implements AuthUseCase {
    constructor(private readonly repository: Repository) { }

    execute = (email: string, pass: string): AuthResponse => {

        const User: null = this.repository.findUserByEmail(email)
        if (!user) {

        }
        // 3º validar se o usuario existe atraves do seu email
        // 4º validar se senha confere
    }
}