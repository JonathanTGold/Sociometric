import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './models/question.model';
import { Questionnaire } from './models/questionnaire.model';
import { User } from './models/user.model';
import { QuestionnaireResolver } from './questionnaire.resolver';
import { QuestionnaireService } from './questionnaire.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Question, Questionnaire])],
  providers: [QuestionnaireResolver, QuestionnaireService],
})
export class UsersModule { }