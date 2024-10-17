import { NestFactory } from '@nestjs/core';
import { Support-serviceModule } from './support-service/support-service.module';

async function bootstrap() {
  const app = await NestFactory.create(Support-serviceModule);
  await app.listen(3000);
}
bootstrap();
