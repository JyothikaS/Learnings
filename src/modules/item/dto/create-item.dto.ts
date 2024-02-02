import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  quantity: number;
}
