export class TweetCore {
    public username: string;
    public tweet: string;
  
    constructor(username: string, tweet: string) {
      this.username = username;
      this.tweet = tweet;
    }
  }
  
  export class Tweet extends TweetCore {
    public avatar: string;
  
    constructor(username: string, avatar: string, tweet: string) {
      super(username, tweet);
      this.avatar = avatar;
    }
  }