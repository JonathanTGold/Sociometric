import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}