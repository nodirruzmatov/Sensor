import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string
  
  @IsNumber()
  @IsNotEmpty()
  readonly idNumber: number

}