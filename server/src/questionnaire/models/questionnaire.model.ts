import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Evalueation } from 'src/evaluations/evaluation.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Questionnaire {

  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  unitName: string;

  @Field()
  @Column()
  SubUnitName: string;

  @OneToMany(type => Evalueation, evalueation => evalueation.questionnaire)
  evaluaions: Evalueation[];
}