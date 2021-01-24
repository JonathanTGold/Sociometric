// import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Question } from './models/question.model';
import { User } from './models/user.model';
import { QuestionnaireService } from './questionnaire.service';

@Resolver(of => User)
// @Resolver()
export class QuestionnaireResolver {
  constructor(private readonly questionnaireService: QuestionnaireService) {}

  @Query(returns => [User])
  getUsers(@Args('unitName') unitName: string): Promise<User[]> {
    return this.questionnaireService.getUsers(unitName);
  }

  @Query(returns => [Question])
  getQuestions(): Promise<Question[]> {
    return this.questionnaireService.getQuestions();
  }


}
