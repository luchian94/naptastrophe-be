import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors(); // Enable if needed
  await app.init();
  return app;
}

export default bootstrap();
