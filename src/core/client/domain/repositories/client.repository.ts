import { ClientDocument } from '../schemas/client.schema';

export interface ClientRepository {
  getById(id: string): Promise<ClientDocument | null>;
  seed(): Promise<string | null>;
}
