import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnswersInput } from './dto/answers.input';
import { Evalueation } from './evaluation.model';

@Injectable()
export class EvalueationsService {
  constructor(
    @InjectRepository(Evalueation)
    private readonly evalueationRepository: Repository<Evalueation>,
  ) {}

  create(answersInput: AnswersInput): Promise<Evalueation> {
    const evalueation = new Evalueation();
    evalueation.evaluatorId = 123;
    evalueation.evalueeId = 474;
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