export class User {
  readonly id: number | null = null
  readonly firstName: string = ''
  readonly lastName: string = ''
  readonly username: string = ''
  readonly dateOfBirth: Date | null = null
  readonly languages: string[] = []

  static build(args: Partial<User>) {
    const user = new User()
    return Object.assign(user, {...args})
  }
}
