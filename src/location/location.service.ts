import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Location } from "./model/location.schema";
import { Model } from "mongoose";
import { CreateLocationInput } from "./model/location.input";
import { LocationPayload } from "./model/location.payload";

const mockLocation = [
  { latitude: 37.38029, longitude: -122.075106 },
  { latitude: 37.380004, longitude: -122.074107 },
  { latitude: 37.385495, longitude: -122.083202 },
  { latitude: 37.387721, longitude: -122.085645 },
  { latitude: 37.387551, longitude: -122.085685 },
  { latitude: 37.38763, longitude: -122.087559 },
  { latitude: 37.389759, longitude: -122.091816 },
  { latitude: 37.391362, longitude: -122.094794 },
  { latitude: 37.390088, longitude: -122.095438 },
  { latitude: 37.390078, longitude: -122.095191 },
  { latitude: 37.389078, longitude: -122.090532 },
  { latitude: 37.388039, longitude: -122.088195 },
  { latitude: 37.388253, longitude: -122.086485 },
  { latitude: 37.387616, longitude: -122.085724 },
  { latitude: 37.387025, longitude: -122.085447 },
  { latitude: 37.387676, longitude: -122.08747 },
  { latitude: 37.390222, longitude: -122.092698 },
  { latitude: 37.391643, longitude: -122.094959 },
  { latitude: 37.386171, longitude: -122.096315 },
  { latitude: 37.385067, longitude: -122.097326 },
  { latitude: 37.369568, longitude: -122.112044 },
  { latitude: 37.364951, longitude: -122.116122 },
  { latitude: 37.364154, longitude: -122.124856 },
  { latitude: 37.388408, longitude: -122.156521 },
  { latitude: 37.393201, longitude: -122.174682 },
  { latitude: 37.409065, longitude: -122.193063 },
  { latitude: 37.418542, longitude: -122.214122 },
  { latitude: 37.422431, longitude: -122.225949 },
  { latitude: 37.430823, longitude: -122.237752 },
  { latitude: 37.439133, longitude: -122.247779 },
  { latitude: 37.447474, longitude: -122.274232 },
  { latitude: 37.468276, longitude: -122.292389 },
  { latitude: 37.484642, longitude: -122.298289 },
  { latitude: 37.494699, longitude: -122.304947 },
  { latitude: 37.500071, longitude: -122.320036 },
  { latitude: 37.501709, longitude: -122.329483 },
  { latitude: 37.510193, longitude: -122.343202 },
  { latitude: 37.521076, longitude: -122.354896 },
  { latitude: 37.543279, longitude: -122.367811 },
  { latitude: 37.539442, longitude: -122.364893 },
  { latitude: 37.564762, longitude: -122.387362 },
  { latitude: 37.573751, longitude: -122.399442 },
  { latitude: 37.599933, longitude: -122.423563 },
  { latitude: 37.608646, longitude: -122.432538 },
  { latitude: 37.613426, longitude: -122.437063 },
  { latitude: 37.61438, longitude: -122.438104 },
  { latitude: 37.616514, longitude: -122.44021 },
  { latitude: 37.62033, longitude: -122.443649 },
  { latitude: 37.62381, longitude: -122.446787 },
  { latitude: 37.629114, longitude: -122.451469 },
  { latitude: 37.631701, longitude: -122.453675 },
  { latitude: 37.636853, longitude: -122.461627 },
  { latitude: 37.638628, longitude: -122.463814 },
  { latitude: 37.638497, longitude: -122.465104 },
  { latitude: 37.635489, longitude: -122.468854 },
  { latitude: 37.631448, longitude: -122.476913 },
  { latitude: 37.626706, longitude: -122.48064 },
  { latitude: 37.625743, longitude: -122.488676 },
  { latitude: 37.628085, longitude: -122.489618 },
  { latitude: 37.632968, longitude: -122.492483 },
  { latitude: 37.631802, longitude: -122.494026 },
  { latitude: 37.630486, longitude: -122.49394 },
  { latitude: 37.630766, longitude: -122.493889 },
  { latitude: 37.630786, longitude: -122.49395 },
  { latitude: 37.629764, longitude: -122.492253 },
  { latitude: 37.628251, longitude: -122.489785 },
  { latitude: 37.469604, longitude: -122.435462 },
  { latitude: 37.46861, longitude: -122.435897 },
  { latitude: 37.468661, longitude: -122.430698 },
  { latitude: 37.469126, longitude: -122.425801 },
  { latitude: 37.485289, longitude: -122.398557 },
  { latitude: 37.478401, longitude: -122.413024 },
  { latitude: 37.491629, longitude: -122.387622 },
  { latitude: 37.491527, longitude: -122.376252 },
  { latitude: 37.487495, longitude: -122.370166 },
  { latitude: 37.492899, longitude: -122.370009 },
  { latitude: 37.496894, longitude: -122.361804 },
  { latitude: 37.509867, longitude: -122.351316 },
  { latitude: 37.511525, longitude: -122.350197 },
  { latitude: 37.509213, longitude: -122.33394 },
  { latitude: 37.513162, longitude: -122.329595 },
  { latitude: 37.527966, longitude: -122.331279 },
  { latitude: 37.551542, longitude: -122.309758 },
  { latitude: 37.551186, longitude: -122.294888 },
  { latitude: 37.533349, longitude: -122.277765 },
  { latitude: 37.507987, longitude: -122.251408 },
  { latitude: 37.500194, longitude: -122.24007 },
  { latitude: 37.49121, longitude: -122.218992 },
  { latitude: 37.487344, longitude: -122.20458 },
  { latitude: 37.486448, longitude: -122.197541 },
  { latitude: 37.482239, longitude: -122.177751 },
  { latitude: 37.471783, longitude: -122.16042 },
  { latitude: 37.464912, longitude: -122.148735 },
  { latitude: 37.454339, longitude: -122.130949 },
  { latitude: 37.449087, longitude: -122.123577 },
  { latitude: 37.439542, longitude: -122.114072 },
  { latitude: 37.432193, longitude: -122.105903 },
  { latitude: 37.421058, longitude: -122.092853 },
  { latitude: 37.409311, longitude: -122.072765 },
  { latitude: 37.399898, longitude: -122.069914 },
  { latitude: 37.386625, longitude: -122.068724 },
  { latitude: 37.383243, longitude: -122.078295 },
  { latitude: 37.385405, longitude: -122.082907 },
  { latitude: 37.386537, longitude: -122.083403 },
  { latitude: 37.387492, longitude: -122.085656 },
  { latitude: 37.387498, longitude: -122.085793 },
  { latitude: 37.387601, longitude: -122.085666 },
  { latitude: 37.387452, longitude: -122.085991 }
]

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name) private locationModel: Model<Location>
  ) {
  }

  async createLocation(body: CreateLocationInput): Promise<LocationPayload> {
    const createdLocation = new this.locationModel(body);
    const Location = await createdLocation.save();
    return Location;
  }

  async findLocation(id: string): Promise<LocationPayload> {
    const Location = await this.locationModel.findOne({ _id: id }).exec();

    if (!Location) {
      throw new NotFoundException(`Location with email id:${id} not found `);
    }
    return Location;
  }

  async listMappedLocation(): Promise<any[]> {
    const Locations = await this.locationModel.find();
    return Locations.map((location) => {
      return { latitude: location.latitude, longitude: location.longitude };
    });
  }

  async listLocation(): Promise<LocationPayload[]> {
    const Locations = await this.locationModel.find();
    return Locations;
  }

  async seedLocation(): Promise<any> {
    const Locations = await this.locationModel.find()
    if (Locations.length == 0) {
      await this.locationModel.insertMany(mockLocation)
      return 'seed succeed'
    } else {
      return 'already seeded'
    }
  }
}
