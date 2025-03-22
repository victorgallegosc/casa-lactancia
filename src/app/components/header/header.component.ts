import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
      selector: 'app-header',
      standalone: true,
      imports: [CommonModule, MenuComponent],
      templateUrl: './header.component.html',
      styleUrl: './header.component.css',
})
export class HeaderComponent {}
