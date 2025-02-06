import { Injectable } from '@nestjs/common';
import type { MailService } from './mail.service';

@Injectable()
export class SMTPMailService implements MailService {
  sendEmail() {
    return 'SMTP mail sent';
  }
}
