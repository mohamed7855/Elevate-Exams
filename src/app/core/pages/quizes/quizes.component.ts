import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-quizes',
  standalone: true,
  imports: [ProgressBarModule, ImageModule],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.scss'
})
export class QuizesComponent {

}
