import { Observable } from 'rxjs';
import { QuizesRes } from '../../interfaces/QuizesRes';

export interface Quiz {
  getAllQuizes(): Observable<QuizesRes>;
}
