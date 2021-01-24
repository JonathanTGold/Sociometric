import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { AnswersInput } from './dto/answers.input';
import { Evalueation } from './evaluation.model';
import { EvalueationsService } from './evaluation.service';


@Resolver(of => Evalueation)
export class EvalueationResolver {
  constructor(private readonly evalueationService: EvalueationsService) {}

  @Mutation(returns => Evalueation)
  async addEvalueation(
    @Args('answresInput') newRecipeData: AnswersInput,
  ): Promise<Evalueation> {
    const evalueatin = await this.evalueationService.create(newRecipeData);
    return evalueatin;
  }
}
