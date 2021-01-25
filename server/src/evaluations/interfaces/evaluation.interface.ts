import { Questionnaire } from "src/questionnaire/models/questionnaire.model";
import { User } from "src/questionnaire/models/user.model";
import { Answer } from "./answer.interface";

export interface IEvalueation {
    id?: number;
    evaluator: number;
    evaluee: number;
    answers: Answer[];
    questionnaire: Questionnaire;
}