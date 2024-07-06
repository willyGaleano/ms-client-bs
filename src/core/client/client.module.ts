import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientEntity } from './domain/entities/client.entity';
import { ClientSchema } from './domain/schemas/client.schema';
import { CLIENT_REPOSITORY } from './domain/constants';
import { ClientMongoRepository } from './application/repository/client-mongo.repository';
import { ClientService } from './application/services/client.service';
import { ClientController } from './infrastructure/controllers/client.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ClientEntity.name, schema: ClientSchema },
    ]),
  ],
  providers: [
    ClientService,
    {
      provide: CLIENT_REPOSITORY,
      useClass: ClientMongoRepository,
    },
  ],
  controllers: [ClientController],
})
export class ClientModule {}
