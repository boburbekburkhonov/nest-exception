import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class Address {
  @ApiProperty({
    name: 'city',
    type: 'string',
    required: true,
    example: 'Tashkent',
  })
  @IsString()
  readonly city: string;

  @ApiProperty({
    name: 'district',
    type: 'string',
    required: false,
    example: 'Yunusobod',
  })
  @IsString()
  readonly district: number;
}

export class createDto {
  @ApiProperty({
    name: 'name',
    type: 'string',
    required: true,
    example: 'eshmat',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({ name: 'age', type: 'number', required: false, example: 12 })
  @IsString()
  readonly age: number;

  @ApiProperty({ type: Address, name: 'address' })
  readonly address: Address;
}
