import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class PostmarkMailService implements MailService {
  sendEmail() {
    return 'Postmark mail sent';
  }
}
