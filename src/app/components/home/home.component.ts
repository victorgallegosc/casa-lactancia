import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { IntroComponent } from '../intro/intro.component';

@Component({
      selector: 'app-home',
      standalone: true,
      imports: [CarouselComponent, IntroComponent],
      templateUrl: './home.component.html',
      styleUrl: './home.component.css',
})
export class HomeComponent {}
