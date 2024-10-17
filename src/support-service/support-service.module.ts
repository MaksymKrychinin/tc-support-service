import { Module } from '@nestjs/common';
import { Support-serviceService } from './services/support-service.service';
import { Support-serviceController } from './controllers/support-service.controller';

@Module({
  controllers: [Support-serviceController],
  providers: [Support-serviceService],
})
export class Support-serviceModule {}
