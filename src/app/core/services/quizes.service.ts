import { QuizesApiAdapterService } from './adapter/quizes-api.adapter.service';
import { Injectable } from '@angular/core';
import { Quiz } from './base/QuizAPI';
import { Observable, catchError, map, throwError } from 'rxjs';
import { QuizesAPIRes, QuizesRes } from '../interfaces/QuizesRes';
import { HttpClient } from '@angular/common/http';
import { QuizEndpoint } from './enums/QuizAPI.endpoint';

@Injectable({
  providedIn: 'root',
})
export class QuizesService implements Quiz {
  constructor(
    private _httpClient: HttpClient,
    private _quizesApiAdapterService: QuizesApiAdapterService
  ) {}

  getAllQuizes(): Observable<QuizesRes> {
    return this._httpClient.get<QuizesAPIRes>(QuizEndpoint.ALL_Quizes).pipe(
      map((res: QuizesAPIRes) =>
        this._quizesApiAdapterService.adaptQuizes(res)
      ),
      catchError((err) => {
        return throwError(
          () => new Error(err?.error?.message || 'Get Quizes Failed.')
        );
      })
    );
  }
}
