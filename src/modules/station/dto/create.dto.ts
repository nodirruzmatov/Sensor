import { IsString, IsNotEmpty, IsNumber, } from 'class-validator';

export class createDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly topic: string;

  @IsString()
  @IsNotEmpty()
  readonly lat: string;

  @IsString()
  @IsNotEmpty()
  readonly lon: string;

  @IsString()
  @IsNotEmpty()
  readonly simkarta: string;

  @IsNumber()
  @IsNotEmpty()
  readonly region: number;

  @IsNumber()
  @IsNotEmpty()
  readonly district: number;

  @IsString()
  @IsNotEmpty()
  readonly sensor: string;
}
