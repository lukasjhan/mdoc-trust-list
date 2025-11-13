import { Injectable } from '@nestjs/common';
import { appleIaca } from './certs/apple-iaca';
import { googleUkIaca } from './certs/google-uk-iaca';
import { googleUsIaca } from './certs/google-us-iaca';
import { usCaliforniaIaca } from './certs/us-california-iaca';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTrustList() {
    const certs = [
      { name: 'apple-iaca', cert: appleIaca }, // TODO: maybe hash?
      { name: 'google-us-iaca', cert: googleUsIaca },
      { name: 'google-uk-iaca', cert: googleUkIaca },
      { name: 'us-california-iaca', cert: usCaliforniaIaca },
    ];
    return {
      certs,
      lastUpdated: new Date('2025-11-13T14:14:00').toISOString(),
    };
  }
}
