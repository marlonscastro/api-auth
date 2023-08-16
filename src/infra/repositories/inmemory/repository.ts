import { User } from "../../../domain/entities/user"
import { Repository } from "../../../implementation/protocols/repositories/repository"

export class InMemoryRepository implements Repository {
  private users: User[] = []
  constructor() {
    this.users.push({
      id: 1,
      nome: 'Raul Uesley da Silva',
      email: 'teste@gmail.com'
    })
  }

  findUserByEmail = (email: string): User | null => {
    const user  = this.users.find(u => u.email === email)
    if(user) return user
    return null
  }
}