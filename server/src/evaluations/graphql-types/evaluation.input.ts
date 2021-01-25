import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsOptional, Max, Min } from 'class-validator';
import { Questionnaire } from 'src/questionnaire/models/questionnaire.model';
import { Answer } from '../interfaces/answer.interface';
import { IEvalueation } from '../interfaces/evaluation.interface';


@InputType()
export class AnswersInput implements Answer {
  @Field(type => Int)
  questionId: number;
  @Min(1)
  @Max(6)
  @IsOptional()
  @Field(type => Int, { nullable: true })
  answer: number;
}

@InputType()
export class EvaluationInput implements IEvalueation {
  @Field(type => Int)
  questionnaire:Questionnaire

  @Field(type => Int)
  evaluator: number;

  @Field(type => Int)
  evaluee: number;

  @Field(type => [AnswersInput])
  answers: Answer[];
}