import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from 'src/questionnaire/models/user.model';
import { Answer } from './interfaces/answer.interface';
import { IEvalueation } from './interfaces/evaluation.interface';
import { AnswersOutput } from './graphql-types/answers.output';
import { Questionnaire } from 'src/questionnaire/models/questionnaire.model';


@ObjectType()
@Entity()
export class Evalueation implements IEvalueation {

    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(type => Int)
    @ManyToOne(type => User, { nullable: false })
    evaluator: number;

    @Field(type => Int)
    @ManyToOne(type => User, { nullable: false })
    evaluee: number;

    @Field(type => [AnswersOutput])
    @Column({ type: 'jsonb' })
    answers: Answer[];

    @Field(type => Int)
    @ManyToOne(type => Questionnaire, { nullable: false })
    questionnaire: Questionnaire;
}