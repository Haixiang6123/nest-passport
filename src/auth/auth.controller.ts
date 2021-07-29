import {Controller, Post, UseGuards, Request, Get} from '@nestjs/common';
import {LocalAuthGuard} from "./local-auth.guard";
import {BasicAuthGuard} from "./basic-auth.guard";

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('local-post')
  async localPost(@Request() request) {
    return request.user
  }

  @UseGuards(LocalAuthGuard)
  @Get('local-get')
  async localGet(@Request() request) {
    return request.user
  }

  @UseGuards(BasicAuthGuard)
  @Post('basic-post')
  async basicPost(@Request() request) {
    return request.user
  }
}
