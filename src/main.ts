import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // swagger configuration
  app.setGlobalPrefix('api');
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Apptunix')
    .setDescription('API documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);


  // images url set
  app.use('/public', express.static(join(__dirname, '..', 'public')));

  await app.listen(3000);
}
bootstrap();
