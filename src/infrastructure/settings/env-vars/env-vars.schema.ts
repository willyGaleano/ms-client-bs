import { z } from 'zod';
import { environmentValues, nodeEnvValues } from './env-vars.model';

export const CommonVariablesSchema = z
  .object({
    ENVIRONMENT: z.enum(environmentValues),
    NODE_ENV: z.enum(nodeEnvValues),
    LOG_LEVEL: z.string(),
    APP_NAME: z.string(),
    HTTP_PORT: z.coerce.number(),
  })
  .describe('CommonVariables');

export const MongoVariablesSchema = z
  .object({
    MONGO_URI: z.string(),
  })
  .describe('MongoVariables');

export const EnvironmentVariablesSchema = CommonVariablesSchema.merge(
  MongoVariablesSchema,
).describe('EnvironmentVariables');

export type EnvironmentVariables = z.infer<typeof EnvironmentVariablesSchema>;
