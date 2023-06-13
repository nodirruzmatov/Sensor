import { IsNumber, IsOptional, IsString } from "class-validator";

export class updateDto {

  @IsString()
  @IsOptional()
  readonly name: string
  
  @IsNumber()
  @IsOptional()
  readonly idNumber: number

}