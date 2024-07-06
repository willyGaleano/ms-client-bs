import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ValidateMongoIdPipe implements PipeTransform<string> {
  transform(value: string): string {
    const isValid = Types.ObjectId.isValid(value);
    if (!isValid) throw new BadRequestException('Invalid MongoDB ObjectId');

    return value;
  }
}
