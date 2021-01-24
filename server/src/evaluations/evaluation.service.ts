import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evalueation } from './evaluation.model';
import { Answer } from './interfaces/answer.interface';

@Injectable()
export class EvalueationsService {
  constructor(
    @InjectRepository(Evalueation)
    private readonly evalueationRepository: Repository<Evalueation>,
  ) {}

  create(answersInput: Answer[]): Promise<Evalueation> {
    const evalueation = new Evalueation();
    evalueation.evaluator = 1;
    evalueation.evaluee = 2;
    evalueation.answers = answersInput;

    return this.evalueationRepository.save(evalueation);
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