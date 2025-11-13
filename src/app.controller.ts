import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { TrustListDto } from './dto/trustlist.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiTags('Trust List')
  @ApiOkResponse({ type: TrustListDto })
  @Get('trust-list')
  async getTrustList() {
    return this.appService.getTrustList();
  }
}
