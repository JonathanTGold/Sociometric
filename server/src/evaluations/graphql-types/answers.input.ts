import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsOptional, Max, Min } from 'class-validator';
import { Answer } from '../interfaces/answer.interface';


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