import { Controller, Get } from '@nestjs/common'
import { ChartService } from './chart.service'

@Controller({
  path: 'chart',
  version: '1'
})
export class ChartController {
  constructor(private readonly chartService: ChartService) {}

  @Get('/')
  async chart() {
    return await this.chartService.findChart()
  }
}
