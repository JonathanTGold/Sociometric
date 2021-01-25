import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AnswersInput, EvaluationInput } from './graphql-types/evaluation.input';
import { Evalueation } from './evaluation.model';
import { EvalueationsService } from './evaluation.service';
import { Answer } from './interfaces/answer.interface';
import { IEvalueation } from './interfaces/evaluation.interface';


@Resolver(of => Evalueation)
export class EvalueationResolver {
  constructor(private readonly evalueationService: EvalueationsService) { }

  @Mutation(returns => [Evalueation])
  async addEvalueation(
    @Args('evaluationsInput', { type: () => [EvaluationInput] }) evaluationsInput: IEvalueation[],
  ): Promise<IEvalueation[]> {
    const evalueatins = await this.evalueationService.create(evaluationsInput);
    return evalueatins;
  }
}
