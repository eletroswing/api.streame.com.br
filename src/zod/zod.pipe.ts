import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { z } from 'zod';

@Injectable()
export class ZodPipe implements PipeTransform {
  constructor(private schema: z.ZodType<any>) {}

  transform(value: any) {
    const result: any = this.schema.safeParse(JSON.parse(value));

    if (result.success) {
      return result.data;
    }

    throw new HttpException(
      JSON.parse(result.error.message),
      HttpStatus.BAD_REQUEST,
    );
  }
}
