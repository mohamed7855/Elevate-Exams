import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { ImageModule } from 'primeng/image';
import { QuizComponent } from '../../layout/quiz/quiz.component';

@Component({
  selector: 'app-quizes',
  standalone: true,
  imports: [ProgressBarModule, ImageModule, QuizComponent],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.scss',
})
export class QuizesComponent {
  quizes: any = [
    {
      _id: '670037f6728c92b7fdf434fc',
      name: 'HTML',
      icon: 'https://exam.elevateegy.com/uploads/categories/6751d734cc3deba60dd5bc80-item_1.png',
    },
  ];
}
