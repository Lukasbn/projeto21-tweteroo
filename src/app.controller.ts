import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { userDTO } from './dtos/user.dto';
import { tweetDTO } from './dtos/tweet.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getHealth(): string {
    return this.appService.getHealth();
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

  @Get("/tweets")
  @HttpCode(200)
  getTweets(@Query("page") page : number = undefined){
    if(page && (isNaN(page) || page < 1)){
      throw new HttpException("Informe uma página válida!", 400)
    }
    return this.appService.getTweets(page)
  }

  @Get("/tweets/:username")
  getTweetsByUsername(@Param("username") username : string){
    return this.appService.getTweetsByUsername(username)
  }
}
