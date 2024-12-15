import { ButtonModule } from 'primeng/button';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = 'Next';
  @Input() classes!: string;
  @Output() clickEmitter: EventEmitter<any> = new EventEmitter();

  actionFire(event:any){
    this.clickEmitter.emit(event)
  }
}
