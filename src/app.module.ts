import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PocService } from './poc/poc.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PocService, PrismaService],
})
export class AppModule {}
