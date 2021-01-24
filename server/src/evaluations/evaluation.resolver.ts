import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AnswersInput } from './graphql-types/answers.input';
import { Evalueation } from './evaluation.model';
import { EvalueationsService } from './evaluation.service';
import { Answer } from './interfaces/answer.interface';


@Resolver(of => Evalueation)
export class EvalueationResolver {
  constructor(private readonly evalueationService: EvalueationsService) { }

  @Mutation(returns => Evalueation)
  async addEvalueation(
    @Args('answresInput', { type: () => [AnswersInput] }) answresInput: Answer[],
  ): Promise<Evalueation> {
    const evalueatin = await this.evalueationService.create(answresInput);
    return evalueatin;
  }
}
