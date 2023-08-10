import { AuthResponse } from "../models/auth-response";

export interface AuthUseCase {
    execute: (email: string, pass: string) => AuthResponse
}

// S - Single Reponsabilty principle