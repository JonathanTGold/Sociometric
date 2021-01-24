import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { AnswersInput } from './dto/answers.input';
import {GraphQLJSON} from 'graphql-type-json';


@ObjectType()
@Entity()
export class Evalueation {

    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    evaluatorId: number;

    @Field()
    @Column()
    evalueeId: number;

    @Field(type => GraphQLJSON)
    @Column({type:'jsonb'})
    answers: AnswersInput;
}