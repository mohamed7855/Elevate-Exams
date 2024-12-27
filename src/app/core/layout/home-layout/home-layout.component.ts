import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from '../menubar/menubar.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, MenubarComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {}
