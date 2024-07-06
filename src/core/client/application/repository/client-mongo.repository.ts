import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { Client } from '../../domain/entities/client.entity';
import { ClientModel } from '../../domain/schemas/client.schema';

@Injectable()
export class ClientMongoRepository implements ClientRepository {
  private readonly logger = new Logger(ClientMongoRepository.name);
  constructor(
    @InjectModel(Client.name) private readonly clientModel: ClientModel,
  ) {}

  async getById(id: string): Promise<Client> {
    return await this.clientModel.findById(id).exec();
  }

  async seed(): Promise<string> {
    const existingClient = await this.clientModel
      .findOne({ clientId: '9999999999' })
      .exec();
    if (existingClient) {
      this.logger.warn({
        msg: 'Client already seeded',
        id: existingClient._id,
        clientId: existingClient.clientId,
      });
      return '';
    }

    const client = await this.clientModel.create({
      address: 'AVENIDA LAS AMERICAS CALI',
      blocked: 'SI',
      cellPhone: '+573101234567',
      channel: 'WEB',
      clientId: '9999999999',
      country: 'CO',
      customerGroup: {
        group: '01',
        group1: 'M',
        group2: 'IND',
        group3: 'FAB',
        group4: 'MUE',
        group5: 'FER',
      },
      customerSchema: 2,
      distrChan: '01',
      division: '02',
      fiscalCode1: '999999999',
      fiscalCode2: '1234567890',
      frequency: true,
      frequencyDays: 'VR',
      idPortfolio: '6661c77b343c9f02ad846a9f',
      immediateDelivery: true,
      industryCode: 'SUPERMERCADO',
      industryCode1: 'FARMACIA',
      isEnrollment: true,
      name: 'SUPER TIENDA LA ECONOMICA',
      name2: 'RICARDO SUAREZ PEREZ',
      office: 'BOG90',
      paymentCondition: 'CR30',
      paymentMethods: [
        {
          clientId: '9999999999',
          typeCredit: 'GGCO',
          creditLimit: 100000,
          creditUsed: 50000,
          amountAvailable: 50000,
        },
        {
          clientId: '9999999999',
          typeCredit: 'CO01',
          creditLimit: 20000,
          creditUsed: 10000,
          amountAvailable: 10000,
        },
        {
          clientId: '9999999999',
          typeCredit: 'CO02',
          creditLimit: 50000,
          creditUsed: 0,
          amountAvailable: 50000,
        },
      ],
      priceGroup: '01',
      priceList: '02',
      routeId: '998877',
      salesOrg: 'CO01',
      supplyCenter: 'CALI',
      updateDate: new Date('2024-06-04T12:05:00-0500'),
      vendorGroup: 'G99',
    });

    this.logger.debug({
      msg: 'Client seeded successfully',
      _id: client._id,
      id: client.id,
    });

    return client._id.toString();
  }
}
