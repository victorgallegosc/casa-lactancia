import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
      selector: 'app-profile-card',
      standalone: true,
      templateUrl: './profile-card.component.html',
      styleUrl: './profile-card.component.css',
})
export class ProfileCardComponent {
      constructor(private router: Router) {}

      navigateToAboutMe(): void {
            this.router.navigate(['/about']);
      }
}
