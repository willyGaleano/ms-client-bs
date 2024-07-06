import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Client Microservice API')
  .setDescription('Client Microservice API Documentation')
  .setVersion('1.0.0')
  .addTag('ms-client-bs')
  .build();
