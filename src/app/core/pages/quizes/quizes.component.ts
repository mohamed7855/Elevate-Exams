import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { ImageModule } from 'primeng/image';
import { QuizComponent } from '../../layout/quiz/quiz.component';
import { QuizesService } from '../../services/quizes.service';
import { isPlatformBrowser } from '@angular/common';
import { Quiz } from '../../interfaces/QuizesRes';

@Component({
  selector: 'app-quizes',
  standalone: true,
  imports: [ProgressBarModule, ImageModule, QuizComponent],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.scss',
})
export class QuizesComponent {
  constructor(
    private _quizesService: QuizesService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  quizes: Quiz[] = [];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this._quizesService.getAllQuizes().subscribe((res) => {
        this.quizes = res.subjects;
      });
    }
  }
}
