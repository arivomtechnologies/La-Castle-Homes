import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface EmailParams {
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  reply_to: string;
  to_email: string;
  phone: string;
  project_type: string;
  budget: string;
  message: string;
  submitted_on: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly publicKey = 'KVjLILpms2q4KGs_M';
  private readonly serviceId = 'Leader';
  private readonly templateNotify = 'template_dgam0en';
  private readonly templateReply = 'template_1k9ltlj';

  async sendProjectEnquiry(params: EmailParams): Promise<void> {
    try {
      // 1. Send admin notification
      await emailjs.send(
        this.serviceId,
        this.templateNotify,
        params as unknown as Record<string, unknown>,
        { publicKey: this.publicKey }
      );

      // 2. Send client auto-reply
      try {
        await emailjs.send(
          this.serviceId,
          this.templateReply,
          params as unknown as Record<string, unknown>,
          { publicKey: this.publicKey }
        );
      } catch (replyErr) {
        console.warn('Auto-reply template warning:', replyErr);
      }
    } catch (error) {
      console.error('EmailJS transmission error:', error);
      throw error;
    }
  }
}
