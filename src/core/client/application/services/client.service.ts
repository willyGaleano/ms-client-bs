import { Inject, Injectable } from '@nestjs/common';
import { CLIENT_REPOSITORY } from '../../domain/constants';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { ClientEntity } from '../../domain/entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @Inject(CLIENT_REPOSITORY)
    private readonly clientRepository: ClientRepository,
  ) {}

  async findById(id: string): Promise<ClientEntity | null> {
    const clientDocument = await this.clientRepository.getById(id);
    if (clientDocument) {
      const { _id, ...rest } = clientDocument.toObject
        ? clientDocument.toObject()
        : clientDocument;
      const clientEntity: ClientEntity = {
        id: _id.toString(),
        ...rest,
      };
      return clientEntity;
    }

    return null;
  }

  async seed(): Promise<string | null> {
    return await this.clientRepository.seed();
  }
}
