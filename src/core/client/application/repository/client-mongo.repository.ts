import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { ClientEntity } from '../../domain/entities/client.entity';
import {
  ClientDocument,
  ClientModel,
} from '../../domain/schemas/client.schema';
import { clientMockModel } from '../../domain/constants';

@Injectable()
export class ClientMongoRepository implements ClientRepository {
  private readonly logger = new Logger(ClientMongoRepository.name);
  constructor(
    @InjectModel(ClientEntity.name) private readonly clientModel: ClientModel,
  ) {}

  async getById(id: string): Promise<ClientDocument | null> {
    return await this.clientModel.findById(id).exec();
  }

  async seed(): Promise<string | null> {
    const existingClient = await this.clientModel
      .findOne({ clientId: '9999999999' })
      .exec();
    if (existingClient) {
      this.logger.warn({
        msg: 'Client already seeded',
        id: existingClient._id,
        clientId: existingClient.clientId,
      });
      return null;
    }

    const client = await this.clientModel.create(clientMockModel);

    this.logger.debug({
      msg: 'Client seeded successfully',
      _id: client._id,
      id: client.id,
    });

    return client._id.toString();
  }
}
