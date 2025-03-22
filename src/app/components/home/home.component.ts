import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { IntroComponent } from '../intro/intro.component';
import { AcademicFormationComponent } from "../academic-formation/academic-formation.component";

@Component({
      selector: 'app-home',
      standalone: true,
      imports: [CarouselComponent, IntroComponent, AcademicFormationComponent],
      templateUrl: './home.component.html',
      styleUrl: './home.component.css',
})
export class HomeComponent { }
