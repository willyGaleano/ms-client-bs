import { ApiProperty } from '@nestjs/swagger';

class PaymentMethod {
  @ApiProperty({ description: 'Client ID' })
  clientId: string;
  @ApiProperty({ description: 'Type of credit' })
  typeCredit: string;
  @ApiProperty({ description: 'Credit limit' })
  creditLimit: number;
  @ApiProperty({ description: 'Credit used' })
  creditUsed: number;
  @ApiProperty({ description: 'Amount available' })
  amountAvailable: number;
}

class CustomerGroup {
  @ApiProperty({ description: 'Main group' })
  group: string;

  @ApiProperty({ description: 'Subgroup 1' })
  group1: string;

  @ApiProperty({ description: 'Subgroup 2' })
  group2: string;

  @ApiProperty({ description: 'Subgroup 3' })
  group3: string;

  @ApiProperty({ description: 'Subgroup 4' })
  group4: string;

  @ApiProperty({ description: 'Subgroup 5' })
  group5: string;
}

export class ClientEntity {
  @ApiProperty({ description: 'ID' })
  id: string;
  @ApiProperty({ description: 'Client address' })
  address: string;
  @ApiProperty({ description: 'Blocked' })
  blocked: string;
  @ApiProperty({ description: 'Cell phone' })
  cellPhone: string;
  @ApiProperty({ description: 'Channel' })
  channel: string;
  @ApiProperty({ description: 'Client ID' })
  clientId: string;
  @ApiProperty({ description: 'Country' })
  country: string;
  @ApiProperty({ description: 'Customer group' })
  customerGroup: CustomerGroup;
  @ApiProperty({ description: 'Customer schema' })
  customerSchema: number;
  @ApiProperty({ description: 'Distribution channel' })
  distrChan: string;
  @ApiProperty({ description: 'Division' })
  division: string;
  @ApiProperty({ description: 'Fiscal code 1' })
  fiscalCode1: string;
  @ApiProperty({ description: 'Fiscal code 2' })
  fiscalCode2: string;
  @ApiProperty({ description: 'Frequency' })
  frequency: boolean;
  @ApiProperty({ description: 'Frequency days' })
  frequencyDays: string;
  @ApiProperty({ description: 'Id portfolio' })
  idPortfolio: string;
  @ApiProperty({ description: 'Immediate delivery' })
  immediateDelivery: boolean;
  @ApiProperty({ description: 'Industry code' })
  industryCode: string;
  @ApiProperty({ description: 'Industry code 1' })
  industryCode1: string;
  @ApiProperty({ description: 'Is enrollment' })
  isEnrollment: boolean;
  @ApiProperty({ description: 'Is in portfolio' })
  name: string;
  @ApiProperty({ description: 'Name 2' })
  name2: string;
  @ApiProperty({ description: 'Office' })
  office: string;
  @ApiProperty({ description: 'Payment condition' })
  paymentCondition: string;
  @ApiProperty({ description: 'Payment method' })
  paymentMethods: PaymentMethod[];
  @ApiProperty({ description: 'Payment method' })
  priceGroup: string;
  @ApiProperty({ description: 'Price list' })
  priceList: string;
  @ApiProperty({ description: 'Route ID' })
  routeId: string;
  @ApiProperty({ description: 'Sales organization' })
  salesOrg: string;
  @ApiProperty({ description: 'Sales territory' })
  supplyCenter: string;
  @ApiProperty({ description: 'Update date' })
  updateDate: Date;
  @ApiProperty({ description: 'Vendor group' })
  vendorGroup: string;
}
