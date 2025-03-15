import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
      CarouselComponent,
      CarouselInnerComponent,
      CarouselItemComponent,
      ThemeDirective,
} from '@coreui/angular';

@Component({
      selector: 'app-home',
      imports: [
            NgFor,
            ThemeDirective,
            CarouselComponent,
            CarouselInnerComponent,
            CarouselItemComponent,
      ],
      templateUrl: './home.component.html',
      styleUrl: './home.component.css',
})
export class HomeComponent {
      slides: any[] = [
            {
                  id: 1,
                  src: './assets/img/carousel/img-1.avif',
            },
            {
                  id: 1,
                  src: './assets/img/carousel/img-2.avif',
            },
      ];

      ngOnInit() {}
}
