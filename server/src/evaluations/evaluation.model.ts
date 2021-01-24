import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from 'src/questionnaire/models/user.model';
import { Answer } from './interfaces/answer.interface';
import { AnswersOutput } from './graphql-types/answers.output';


@ObjectType()
@Entity()
export class Evalueation {

    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(type => Int)
    @OneToOne(type => User)
    @JoinColumn()
    evaluator: number;

    @Field(type => Int)
    @OneToOne(type => User)
    @JoinColumn()
    evaluee: number;

    @Field(type => [AnswersOutput])
    @Column({ type: 'jsonb' })
    answers: Answer[];
}