import { HttpCode, HttpException, Injectable } from '@nestjs/common';
import { User } from './entities/user';
import { Tweet } from './entities/tweet';

@Injectable()
export class AppService {
  private users: User[] = [];
  private tweets: Tweet[] = [];
  private limit = 15

  getHealth(): string {
    return "I'm okay!";
  }

  signUp(username: string, avatar: string) {
    const user = new User(username, avatar);
    this.users.push(user);
  }

  getUserByUsername(username: string): User {
    return this.users.find(user => user.username === username);
  }

  postTweet(username: string, tweet: string){
    const user = this.getUserByUsername(username)
    if(!user) throw new HttpException("You must be logged to post a tweet!",401)
    const tweetPost = new Tweet(user,tweet)
    this.tweets.push(tweetPost)
  }

  getTweets(page? : number){
    let tweets : Tweet[] = []
    if(page){
      const {start,end} = this.getLimits(page);
      tweets = this.tweets.slice(start,end)
    } 
    else{
      tweets = this.tweets.slice(-this.limit)
    }
    return tweets.map(tweets =>(
      {
        username: tweets.user.username,
        avatar: tweets.user.avatar,
        tweet: tweets.tweet
      }
    ))
  }

  getLimits(page : number){
    return{
      start: (page - 1) * this.limit,
      end: page*this.limit
    }
  }

  getTweetsByUsername(username : string){
    const tweets = this.tweets.filter(tweets => tweets.user.username === username)

    return tweets.map(tweets =>(
      {
        username: tweets.user.username,
        avatar: tweets.user.avatar,
        tweet: tweets.tweet
      }
    ))
  }
}
