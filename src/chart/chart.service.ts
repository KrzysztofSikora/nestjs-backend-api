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
    data: [50, 50, 50, 50, 50, 50, 50, 50, 50],
    backgroundColor: 'rgba(227,110,16,0.1)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  },
  {
    label: 'Stuffiness',
    data: [12, 12, 12, 12, 12, 12, 12, 12],
    backgroundColor: 'rgba(227,110,16,0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  },
  {
    label: 'Discomfort',
    data: [20, 20, 20, 20, 20, 20, 20, 20],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  },
  {
    label: 'Humidity',
    data: [30, 30, 30, 30, 30, 30, 30, 30],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  },
  {
    label: 'Pollution',
    data: [40, 40, 40, 40, 40, 40, 40, 40],
    backgroundColor: 'rgba(99,255,185,0.2)',
    borderColor: 'rgb(8,16,15)',
    borderWidth: 2
  },
  {
    label: 'Temperature',
    data: [32, 8, 25, 25, 10, 25, 21, 10],
    backgroundColor: 'rgba(99,107,255,0.8)',
    borderColor: 'rgb(41,56,128)',
    borderWidth: 5,
    borderSkipped: false
  },
  {
    label: 'CO2',
    data: [20, 5, 13, 20, 5, 10, 15, 21],
    backgroundColor: 'rgba(99,107,255,0.9)'
  },
  {
    label: 'Density',
    data: [50, 50, 50, 50, 50, 50, 50, 50],
    backgroundColor: 'rgba(99,107,255,0.1)'
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
