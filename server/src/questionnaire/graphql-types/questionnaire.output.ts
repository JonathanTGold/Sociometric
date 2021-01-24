import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Question } from '../models/question.model';
import { Questionnaire } from '../models/questionnaire.model';
import { User } from '../models/user.model';

@ObjectType()
export class QuestionnaireMetadata {
    @Field(type => Questionnaire)
    questonnaire: Questionnaire;

    @Field(type => [Question])
    questions: Question[];

    @Field(type => [User])
    users: User[];
}