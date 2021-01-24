import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evalueation } from './evaluation.model';
import { EvalueationResolver } from './evaluation.resolver';
import { EvalueationsService } from './evaluation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Evalueation])],
  providers: [EvalueationResolver, EvalueationsService],
})
export class EvalueationsModule { }