import { Module } from '@nestjs/common'
import { ChartService } from './chart.service'
import { ChartController } from './chart.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Chart, ChartSchema } from './model/chart.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chart.name, schema: ChartSchema }]),
  ],
  providers: [ChartService],
  controllers: [ChartController]
})
export class ChartModule {}
