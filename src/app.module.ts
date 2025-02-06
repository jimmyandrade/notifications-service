import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SMTPMailService } from './mail/smtp-mail.service';
import { MailService } from './mail/mail.service';

@Module({
  controllers: [AppController],
  imports: [],
  providers: [
    {
      provide: MailService,
      useClass: SMTPMailService,
    },
  ],
})
export class AppModule {}
