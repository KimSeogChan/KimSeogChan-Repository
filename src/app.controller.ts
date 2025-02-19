import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(); // 서비스에서 데이터 가져오기
  /*    return "Hello World, vscode로 편집함  새롭게 편집함";*/

  }
}
