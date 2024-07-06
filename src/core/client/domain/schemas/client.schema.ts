import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

class PaymentMethod {
  @Prop({ required: true })
  clientId: string;

  @Prop({ required: true })
  typeCredit: string;

  @Prop({ required: true })
  creditLimit: number;

  @Prop({ required: true })
  creditUsed: number;

  @Prop({ required: true })
  amountAvailable: number;
}

class CustomerGroup {
  @Prop({ required: true })
  group: string;

  @Prop({ required: true })
  group1: string;

  @Prop({ required: true })
  group2: string;

  @Prop({ required: true })
  group3: string;

  @Prop({ required: true })
  group4: string;

  @Prop({ required: true })
  group5: string;
}

@Schema()
class Client {
  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  blocked: string;

  @Prop({ required: true })
  cellPhone: string;

  @Prop({ required: true })
  channel: string;

  @Prop({ required: true, index: true, unique: true })
  clientId: string;

  @Prop({ required: true })
  country: string;

  @Prop({ type: CustomerGroup, required: true })
  customerGroup: CustomerGroup;

  @Prop({ required: true })
  customerSchema: number;

  @Prop({ required: true })
  distrChan: string;

  @Prop({ required: true })
  division: string;

  @Prop({ required: true })
  fiscalCode1: string;

  @Prop({ required: true })
  fiscalCode2: string;

  @Prop({ required: true })
  frequency: boolean;

  @Prop({ required: true })
  frequencyDays: string;

  @Prop({ required: true, index: true })
  idPortfolio: string;

  @Prop({ required: true })
  immediateDelivery: boolean;

  @Prop({ required: true })
  industryCode: string;

  @Prop({ required: true })
  industryCode1: string;

  @Prop({ required: true })
  isEnrollment: boolean;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  name2: string;

  @Prop({ required: true })
  office: string;

  @Prop({ required: true })
  paymentCondition: string;

  @Prop({ type: [PaymentMethod], default: [] })
  paymentMethods: PaymentMethod[];

  @Prop({ required: true })
  priceGroup: string;

  @Prop({ required: true })
  priceList: string;

  @Prop({ required: true })
  routeId: string;

  @Prop({ required: true })
  salesOrg: string;

  @Prop({ required: true })
  supplyCenter: string;

  @Prop({ required: true, default: Date.now })
  updateDate: Date;

  @Prop({ required: true })
  vendorGroup: string;
}

export type ClientDocument = Client & Document;

export const ClientSchema = SchemaFactory.createForClass(Client);

export type ClientModel = Model<ClientDocument>;
