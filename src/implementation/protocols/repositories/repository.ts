import { User } from "../../../domain/entities/user";

export interface Repository {
    findUserByEmail: (email: string) => User | null
}