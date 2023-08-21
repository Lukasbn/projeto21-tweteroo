import { Injectable } from '@nestjs/common';
import { CreateUser } from './entities/user';
import { Tweet } from './entities/tweet';

@Injectable()
export class AppService {

  private users: CreateUser[] = [];
  private tweets: Tweet[] = [];

  getHello(): string {
    return 'Hello World!';
  }
}
