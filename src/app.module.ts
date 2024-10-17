import { Module } from '@nestjs/common';
import { Support-serviceModule } from './support-service/support-service.module';

@Module({
  imports: [Support-serviceModule],
})
export class AppModule {}
