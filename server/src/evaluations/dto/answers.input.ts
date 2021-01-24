import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, Max, Min } from 'class-validator';

@InputType()
export class Answer {
  @Field(type => Int)
  questionId: number;
  @Min(1)
  @Max(6)
  @IsOptional()
  @Field(type => Int, { nullable: true })
  answer: number;
}

@InputType()
export class AnswersInput {
  @Field(type => [Answer])
  answers: Answer[];
}
