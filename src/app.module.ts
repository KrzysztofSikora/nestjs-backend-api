import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ConfigModule } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { LocationModule } from './location/location.module'
import { MongooseModule } from '@nestjs/mongoose'
import { ConnectionsController } from './connections/connections.controller'
import { WebsocketGateway } from './websocket.gateway'

import { ChartModule } from "./chart/chart.module";

@Module({
  imports: [
    ChartModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({ limit: 10, ttl: 60 }),
    MongooseModule.forRoot(process.env.DATABASE_URI, {
      dbName: process.env.DATABASE_NAME,
      auth: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS
      }
    }),

    // feature module
    LocationModule
  ],
  controllers: [AppController, ConnectionsController],
  providers: [WebsocketGateway]
})
export class AppModule {}
