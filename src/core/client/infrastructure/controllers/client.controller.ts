import {
  Controller,
  Get,
  Logger,
  Param,
  Post,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ClientService } from '../../application/services/client.service';
import { ClientEntity } from '../../domain/entities/client.entity';
import { ValidateMongoIdPipe } from '../../../../infrastructure/pipes/validate-mongo-id.pipe';
import { ResponseWrapper } from '../../../../infrastructure/utils/wrapper/response-wrapper.util';

@ApiTags('Clients')
@Controller('clients')
export class ClientController {
  private readonly logger = new Logger(ClientController.name);
  constructor(private readonly clientService: ClientService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Find a client by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The client has been successfully found.',
    type: ClientEntity,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Client not found.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'The ID of the client to find.',
  })
  async findById(
    @Param('id', ValidateMongoIdPipe) id: string,
  ): Promise<ResponseWrapper<ClientEntity>> {
    try {
      const client = await this.clientService.findById(id);
      return new ResponseWrapper<ClientEntity>('Client found', client);
    } catch (error) {
      this.logger.error({
        msg: 'Error finding client',
        error: { ...error, stack: error.stack },
      });
      return new ResponseWrapper<ClientEntity>('Client not found');
    }
  }

  @Post('seed')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Seed clients into the database' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Clients have been successfully seeded.',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error seeding clients',
  })
  async seed(): Promise<ResponseWrapper<string>> {
    try {
      const id = await this.clientService.seed();
      return new ResponseWrapper<string>('Clients seeded', id);
    } catch (error) {
      this.logger.error({
        msg: 'Error seeding clients',
        error: { ...error, stack: error.stack },
      });
      return new ResponseWrapper<string>('Error seeding clients');
    }
  }
}
