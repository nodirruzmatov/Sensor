import { IsString, IsOptional } from 'class-validator';

export class updateDto {
  @IsString()
  @IsOptional()
  readonly username: string;

  @IsString()
  @IsOptional()
  readonly password: string;

  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly telephone: string;

  @IsString()
  @IsOptional()
  readonly role: string;
}
