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
}
