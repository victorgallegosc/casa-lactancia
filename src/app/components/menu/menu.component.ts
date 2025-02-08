import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
      selector: 'app-menu',
      imports: [CommonModule],
      templateUrl: './menu.component.html',
      styleUrl: './menu.component.css',
})
export class MenuComponent {
      isOpen = false;
      menuItems = [
            {
                  name: 'Inicio',
                  path: 'header',
            },
            {
                  name: 'Sobre mi',
                  path: '',
            },
            {
                  name: 'Formacion Academica',
                  path: '',
            },
            {
                  name: 'Servicios',
                  path: '',
            },
            {
                  name: 'Cursos y Talleres',
                  path: '',
            },
            {
                  name: 'Blog',
                  path: '',
            },
            {
                  name: 'Contacto',
                  path: '',
            },
      ];

      constructor(private router: Router) {}

      toggleMenu() {
            this.isOpen = !this.isOpen;
      }

      onClickMenuItem(url: string) {
            this.router.navigate([url]);
            this.isOpen = false;
      }
}
