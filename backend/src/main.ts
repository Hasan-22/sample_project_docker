import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all origins (you can also specify specific domains)
  app.enableCors({
    origin: '*', // Or '*' for all origins
    methods: 'GET, POST, PUT, DELETE', // Allowed methods
    allowedHeaders: 'Content-Type, Authorization', // Allowed headers
  });

  await app.listen(3000);
}

bootstrap();
