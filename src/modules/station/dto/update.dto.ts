import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class updateDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly topic: string;

  @IsString()
  @IsOptional()
  readonly lat: string;

  @IsString()
  @IsOptional()
  readonly lon: string;

  @IsString()
  @IsOptional()
  readonly simkarta: string;

  @IsNumber()
  @IsOptional()
  readonly region: number;

  @IsNumber()
  @IsOptional()
  readonly district: number;


  @IsString()
  @IsOptional()
  readonly sensor: string;
}
