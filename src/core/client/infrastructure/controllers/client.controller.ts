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
import { Client } from '../../domain/entities/client.entity';

@ApiTags('Clients')
@Controller('clients')
export class ClientController {
  private readonly logger = new Logger(ClientController.name);

  constructor(private readonly clientService: ClientService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Find a client by ID' })
  @ApiResponse({
    status: 200,
    description: 'The client has been successfully found.',
    type: Client,
  })
  @ApiResponse({ status: 404, description: 'Client not found.' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'The ID of the client to find.',
  })
  async findById(@Param('id') id: string): Promise<Client> {
    return await this.clientService.findById(id);
  }

  @Post('seed')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Seed clients into the database' })
  @ApiResponse({
    status: 201,
    description: 'Clients have been successfully seeded.',
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async seed(): Promise<{
    data: string | null;
  }> {
    try {
      const id = await this.clientService.seed();
      return { data: id };
    } catch (error) {
      this.logger.error({
        msg: 'Error seeding clients',
        error: { ...error, stack: error.stack },
      });
      return { data: null };
    }
  }
}
