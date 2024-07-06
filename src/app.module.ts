import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'nestjs-pino';
import configuration from './infrastructure/settings/env-vars/global.config';
import { GlobalConfig } from './infrastructure/settings/env-vars/env-vars.model';
import { getConfigLogger } from './infrastructure/settings/logger/logger.config';
import { HealthCheckModule } from './core/health-check/health-check.module';
import { EnvironmentVariables } from './infrastructure/settings/env-vars/env-vars.schema';
import { ClientModule } from './core/client/client.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService<GlobalConfig>) => {
        return getConfigLogger(configService);
      },
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService<EnvironmentVariables>,
      ) => {
        const uri = configService.get<string>('MONGO_URI');
        return { uri };
      },
      inject: [ConfigService],
    }),
    HealthCheckModule,
    ClientModule,
  ],
})
export class AppModule {}
