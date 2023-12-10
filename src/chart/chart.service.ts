import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Chart } from "./model/chart.schema";
import { Model } from "mongoose";
import { ChartPayload } from "./model/chart.payload";
import { CreateLocationInput } from "../location/model/location.input";
import { LocationPayload } from "../location/model/location.payload";

@Injectable()
export class ChartService {
  constructor(@InjectModel(Chart.name) private chartModel: Model<Chart>) {
  }

  async findChart(): Promise<ChartPayload[]> {
    const Chart = await this.chartModel.find();
    return Chart.map((data) => {
      return {
        label: data.label,
        data: data.data,
        backgroundColor: data.backgroundColor,
        borderColor: data.borderColor,
        borderWidth: data.borderWidth,
        borderSkipped: data.borderSkipped
      };
    });
  }
}
