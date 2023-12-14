import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Chart } from './model/chart.schema'
import { Model } from 'mongoose'
import { ChartPayload } from './model/chart.payload'
import { CreateLocationInput } from '../location/model/location.input'
import { LocationPayload } from '../location/model/location.payload'
const mockChart = [
  {
    label: 'Transmission',
    data: [50, 50, 50, 50, 50, 50, 50, 50],
    backgroundColor: 'rgba(242,242,243,0.1)'
  },
  {
    label: 'Stuffines',
    data: [20, 5, 13, 20, 5, 10, 15, 21],
    backgroundColor: 'rgba(99,107,255,0.7)'
  },
  {
    label: 'Discomfort',
    data: [32, 8, 25, 25, 12, 25, 21, 12],
    backgroundColor: 'rgba(99,107,255,0.6)'
  },
  {
    label: 'Humidity',
    data: [12, 12, 12, 12, 12, 12, 12, 12],
    backgroundColor: 'rgba(209,201,198)'
  },
  {
    label: 'Pollution',
    data: [20, 20, 20, 20, 20, 20, 20, 20],
    backgroundColor: 'rgba(211, 198, 192, 0.6)'
  },
  {
    label: 'Temperature',
    data: [30, 30, 30, 30, 30, 30, 30, 30],
    backgroundColor: 'rgba(231, 221, 216, 0.6)'
  },
  {
    label: 'CO2',
    data: [40, 40, 40, 40, 40, 40, 40, 40],
    backgroundColor: 'rgba(233,232,232,0.2)'
  },
  {
    label: 'Density',
    data: [50, 50, 50, 50, 50, 50, 50, 50],
    backgroundColor: 'rgba(242,242,243,0.1)'
  }
]
@Injectable()
export class ChartService {
  constructor(@InjectModel(Chart.name) private chartModel: Model<Chart>) {}

  async findChart(): Promise<ChartPayload[]> {
    const Chart = await this.chartModel.find()
    return Chart.map((data) => {
      return {
        label: data.label,
        data: data.data,
        backgroundColor: data.backgroundColor,
        borderColor: data.borderColor,
        borderWidth: data.borderWidth,
        borderSkipped: data.borderSkipped
      }
    })
  }

  async seedChart(): Promise<string> {
    const Chart = await this.chartModel.find()
    console.log(Chart.length)
    if (Chart.length === 0) {
      await this.chartModel.insertMany(mockChart)
      return 'seed succeed'
    } else {
      return 'already seeded'
    }
  }
}
