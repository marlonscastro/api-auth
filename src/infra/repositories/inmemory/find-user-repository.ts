import { User } from "../../../domain/entities/user"

export class FindUserRepository {
  private users: User[] = []
  constructor() {
    this.users.push({
      id: 1,
      nome: 'Raul Uesley da Silva',
      email: 'teste@gmail.com'
    })
  }

  execute = (email: string): User | null => {
    const user  = this.users.find(u => u.email === email)
    if(user) return user
    return null
  }
}