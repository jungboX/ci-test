import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello yerim!'; // 테스트 실패 유도
  }
}
