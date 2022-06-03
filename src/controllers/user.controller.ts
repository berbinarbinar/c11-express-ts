import { User } from '../models/User'

export class UserController {
  async createUser(options: {
    userName: string
    lastName: string
    age: number
  }): Promise<any> {
    const newUser = new User()
    newUser.userName = options.userName
    newUser.lastName = options.lastName
    newUser.age = options.age
    newUser.save()

    return newUser
  }
}
