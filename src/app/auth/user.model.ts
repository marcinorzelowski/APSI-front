export class User {
  constructor(
    public email: string,
    public authToken: string,
    public refreshToken: string
  ) {
  }
}
