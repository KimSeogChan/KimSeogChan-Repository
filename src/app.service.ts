import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello 네스트 자바스크립트!!!!  git를 시작';
  }
}
