import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PocService {
  constructor(private prisma: PrismaService) {}

  async getOneByEmail(email: string) {
    return await this.prisma.pOC.findUnique({
      where: {
        email,
      },
    });
  }

  async getAll() {
    return await this.prisma.pOC.findMany();
  }

  async createOne(email: string) {
    const inDb = await this.prisma.pOC.findUnique({
      where: {
        email,
      },
    });

    if (inDb && inDb.active == true)
      throw new HttpException('user-already-exists', HttpStatus.NOT_ACCEPTABLE);

    if (inDb && inDb.active == false)
      return await this.prisma.pOC.update({
        where: {
          email,
        },
        data: {
          active: true,
        },
      });

    return await this.prisma.pOC.create({
      data: {
        email,
      },
    });
  }
}
