import { Injectable } from '@angular/core';
import { Adapter } from '../../interfaces/adapter';
import { QuizesAPIRes, QuizesRes } from '../../interfaces/QuizesRes';

@Injectable({
  providedIn: 'root',
})
export class QuizesApiAdapterService implements Adapter {
  constructor() {}
  adaptQuizes(data: QuizesAPIRes): QuizesRes {
    return {
      message: data.message,
      subjects: data.subjects,
    };
  }
}
