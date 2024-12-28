import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { ImageModule } from 'primeng/image';
import { QuizComponent } from '../../layout/quiz/quiz.component';
import { QuizesService } from '../../services/quizes.service';

@Component({
  selector: 'app-quizes',
  standalone: true,
  imports: [ProgressBarModule, ImageModule, QuizComponent],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.scss',
})
export class QuizesComponent {
  constructor(private _quizesService: QuizesService) {}

  quizes: any = [];

  ngOnInit(): void {
    // this._quizesService.getAllQuizes().subscribe((res) => {
    //   console.log(res);
    // });
  }
}
