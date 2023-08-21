export class CreateUser {
    public username: string;
    public avatar: string;
  
    constructor(username: string, avatar: string) {
      this.username = username;
      this.avatar = avatar;
    }
  }