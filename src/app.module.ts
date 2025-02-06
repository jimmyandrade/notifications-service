import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SMTPMailService } from './mail/smtp-mail.service';
import { MailService } from './mail/mail.service';
import { HttpModule } from './http.module';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [AppController],
  imports: [HttpModule],
  providers: [
    PrismaService,
    {
      provide: MailService,
      useClass: SMTPMailService,
    },
  ],
})
export class AppModule {}
