import { Injectable } from '@nestjs/common';
import { User } from './entities/user';
import { Tweet } from './entities/tweet';

@Injectable()
export class AppService {

  private users: User[] = [];
  private tweets: Tweet[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  signUp(username: string, avatar: string) {
    const user = new User(username, avatar);
    this.users.push(user);
  }

  getUserByUsername(username: string): User {
    return this.users.find(user => user.username === username);
  }
}
