import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { PocService } from './poc/poc.service';

function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private poc: PocService,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post('create')
  async getPostCreate(@Body() data: any) {
    if (!data.email) {
      throw new HttpException('missing-data-email', HttpStatus.BAD_REQUEST);
    }
    if (!validateEmail(data.email)) {
      throw new HttpException('invalid-data-email', HttpStatus.BAD_REQUEST);
    }
    return await this.poc.createOne(data.email);
  }
}
