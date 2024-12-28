import { TestBed } from '@angular/core/testing';

import { QuizesApiAdapterService } from './quizes-api.adapter.service';

describe('QuizesApiAdapterService', () => {
  let service: QuizesApiAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizesApiAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
