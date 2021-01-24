// import { NotFoundException } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Question } from './models/question.model';
import { QuestionnaireMetadata } from './graphql-types/questionnaire.output';
import { User } from './models/user.model';
import { QuestionnaireService } from './questionnaire.service';


@Resolver(of => QuestionnaireMetadata)
export class QuestionnaireResolver {
  constructor(private readonly questionnaireService: QuestionnaireService) { }

  // @Query(returns => [User])
  // getUsers(@Args('unitName') unitName: string): Promise<User[]> {
  //   return this.questionnaireService.getUsers(unitName);
  // }

  // @Query(returns => [Question])
  // getQuestions(): Promise<Question[]> {
  //   return this.questionnaireService.getQuestions();
  // }

  @Query(returns => QuestionnaireMetadata, {nullable: true})
  async getQuestionnaireMetadata(
    @Args('questionnaireId', { type: () => Int }) questionnaireId: number)
  : Promise<QuestionnaireMetadata> {

    const questionnaireMetaData = new QuestionnaireMetadata();
    const questonnaire = await this.questionnaireService.getQuesionnaiteMetaData(questionnaireId);
    if(questonnaire) {
      questionnaireMetaData.questonnaire = questonnaire;
      questionnaireMetaData.questions = await this.questionnaireService.getQuestions();
      questionnaireMetaData.users = await this.questionnaireService.getUsers(questonnaire.unitName);

    } else {
      return null
    }
  
    return questionnaireMetaData;
  }
}
