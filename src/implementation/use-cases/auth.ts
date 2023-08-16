import { User } from "../../domain/entities/user";
import { UserNotFound } from "../../domain/errors/user-not-found";
import { UserUnauthorized } from "../../domain/errors/user-unauthorized";
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

        const user: User | null = this.repository.findUserByEmail(email)
        // 3º validar se o usuario existe atraves do seu email
        if (!user) throw new UserNotFound()
        
        // 4º validar se senha confere
        if (user.pass !== pass) throw new UserUnauthorized()

        return {
            id: user.id,
            email: user.email,
            name: user.name,
            token: 'eorpipoewrsdflsdçlfkjsdçlfkjsdçlfkjsdçlfj'
        }


    }
}