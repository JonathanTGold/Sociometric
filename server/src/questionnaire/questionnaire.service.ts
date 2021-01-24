import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './models/question.model';
// import { NewRecipeInput } from './dto/new-recipe.input';
// import { RecipesArgs } from './dto/recipes.args';
import { User } from './models/user.model';

@Injectable()
export class QuestionnaireService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(Question) private readonly questionRepository: Repository<Question>
  ) { }

  // async create(data: NewRecipeInput): Promise<Recipe> {
  //   return {} as any;
  // }

  async getUsers(unitName:string): Promise<User[]> {
    return this.usersRepository.find({ unitName: unitName });
  }

  async getQuestions(): Promise<Question[]> {
    return this.questionRepository.find();
  }
}
