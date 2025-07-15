import { Controller, Get } from '@nestjs/common';
import type { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getHello(): Promise<any> {
    return this.prismaService.notification.findMany();
  }
}
