export interface AuthUseCase {
    execute: (email: string, pass: string)
}

// S - Single Reponsabilty principle