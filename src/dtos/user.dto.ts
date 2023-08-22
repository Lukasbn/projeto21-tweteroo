import { IsNotEmpty, IsString, IsUrl, isNotEmpty } from "class-validator";

export class userDTO {

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsUrl()
    avatar: string;
}