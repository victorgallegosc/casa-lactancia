import { Component } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';

@Component({
      selector: 'app-intro',
      standalone: true,
      imports: [ProfileCardComponent],
      templateUrl: './intro.component.html',
      styleUrl: './intro.component.css',
})
export class IntroComponent {}
