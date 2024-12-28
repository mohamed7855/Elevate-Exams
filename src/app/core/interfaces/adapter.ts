import { QuizesAPIRes, QuizesRes } from "./QuizesRes";

export interface Adapter {
  adaptQuizes(data: QuizesAPIRes): QuizesRes;
}