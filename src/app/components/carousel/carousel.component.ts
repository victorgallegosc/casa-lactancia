import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
      selector: 'app-carousel',
      standalone: true,
      imports: [NgFor],
      templateUrl: './carousel.component.html',
      styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit, OnDestroy {
      images: string[] = ['/img/carousel/home1.jpg', '/img/carousel/home2.jpg'];
      currentIndex: number = 0;
      private intervalId: any;

      ngOnInit(): void {
            // Add image loading verification
            this.images.forEach((src, index) => {
                  const img = new Image();
                  img.onload = () => {
                        console.log(
                              `Image ${index + 1} loaded successfully:`,
                              src
                        );
                  };
                  img.onerror = (err) => {
                        console.error(
                              `Error loading image ${index + 1}:`,
                              src,
                              err
                        );
                  };
                  img.src = src;
            });

            this.startCarousel();
      }

      ngOnDestroy(): void {
            this.stopCarousel();
      }

      startCarousel(): void {
            this.stopCarousel();
            this.intervalId = setInterval(() => {
                  this.nextImage();
            }, 5000);
      }

      stopCarousel(): void {
            if (this.intervalId) {
                  clearInterval(this.intervalId);
                  this.intervalId = null;
            }
      }

      nextImage(): void {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            this.resetCarouselTimer();
      }

      previousImage(): void {
            this.currentIndex =
                  (this.currentIndex - 1 + this.images.length) %
                  this.images.length;
            this.resetCarouselTimer();
      }

      setCurrentImage(index: number): void {
            if (index !== this.currentIndex) {
                  this.currentIndex = index;
                  this.resetCarouselTimer();
            }
      }

      resetCarouselTimer(): void {
            this.startCarousel();
      }

      isActive(index: number): boolean {
            return index === this.currentIndex;
      }
}
