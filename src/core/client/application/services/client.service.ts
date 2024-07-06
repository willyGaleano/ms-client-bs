import { Inject, Injectable } from '@nestjs/common';
import { CLIENT_REPOSITORY } from '../../domain/constants';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { Client } from '../../domain/entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @Inject(CLIENT_REPOSITORY)
    private readonly clientRepository: ClientRepository,
  ) {}

  async findById(id: string): Promise<Client> {
    return await this.clientRepository.getById(id);
  }

  async seed(): Promise<string> {
    return await this.clientRepository.seed();
  }
}
