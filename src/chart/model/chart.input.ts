import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber} from "class-validator";

export class CreateLocationInput {
  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsNumber()
  latitude: number

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsNumber()
  longitude: number
}

export class UpdateLocationInput {}
