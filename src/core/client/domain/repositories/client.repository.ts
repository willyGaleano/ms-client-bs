import { Client } from '../entities/client.entity';

export interface ClientRepository {
  getById(id: string): Promise<Client>;
  seed(): Promise<string>;
}
