import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evalueation } from './evaluation.model';
import { EvaluationInput } from './graphql-types/evaluation.input';
// import { Answer } from './interfaces/answer.interface';
import { IEvalueation } from './interfaces/evaluation.interface';

@Injectable()
export class EvalueationsService {
  constructor(
    @InjectRepository(Evalueation)
    private readonly evalueationRepository: Repository<Evalueation>,
  ) {}

  create(evaluationsInput: IEvalueation[]): Promise<IEvalueation[]> {
    // const evalueation = new Evalueation();
    // evalueation.evaluator = 1;
    // evalueation.evaluee = 2;
    // evalueation.answers = answersInput;
console.log(evaluationsInput)
    return this.evalueationRepository.save(evaluationsInput);
  }

//   async findAll(): Promise<User[]> {
//     return this.usersRepository.find();
//   }

//   findOne(id: string): Promise<User> {
//     return this.usersRepository.findOne(id);
//   }

//   async remove(id: string): Promise<void> {
//     await this.usersRepository.delete(id);
//   }
}