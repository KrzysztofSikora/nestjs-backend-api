import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { ValidationPipe, VersioningType } from '@nestjs/common'
import helmet from 'helmet'
import * as compression from 'compression'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { join } from 'path'
import { NestExpressApplication } from "@nestjs/platform-express";

const PORT = parseInt(process.env.PORT, 10) || 4000

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // register all plugins and extension

  app.enableCors({ origin: '*' })
  app.useGlobalPipes(new ValidationPipe({}))
  app.enableVersioning({ type: VersioningType.URI })
  app.use(helmet({ contentSecurityPolicy: false}))
  app.use(compression())

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');



  const config = new DocumentBuilder()
    .setTitle('Api for task')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(PORT, () => {
    console.log(`🚀 Application running at port ${PORT}`)
  })
}

bootstrap()
