import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [ProgressBarModule, ImageModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

}
