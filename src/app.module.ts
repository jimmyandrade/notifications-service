import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from './http.module';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [AppController],
  imports: [HttpModule],
  providers: [PrismaService],
})
export class AppModule {}
