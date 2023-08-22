import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { userDTO } from './dtos/user.dto';
import { tweetDTO } from './dtos/tweet.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/sign-up")
  @HttpCode(200)
  signUp(@Body() body : userDTO){
    this.appService.signUp(body.username, body.avatar);
  }

  @Post("/tweets")
  postTweet(@Body() body : tweetDTO){
    this.appService.postTweet(body.username, body.tweet)
  }
}
